import React, { useState } from 'react';
import { useCartContext } from '../Context/CartContext';
import { getFirestore, collection, addDoc, doc, getDoc, updateDoc,} from 'firebase/firestore';

const CheckOut = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmacion, setEmailConfirmacion] = useState('');
  const [error, setError] = useState('');
  const [ordenId, setOrdenId] = useState('');

  const { cart, totalPrice, removeProduct, clearCart } = useCartContext();

  const handleFormulario = async (event) => {
    event.preventDefault();
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError('Por favor complete todos los campos');
      return;
    }
    if (email !== emailConfirmacion) {
      setError('La validación de correo es incorrecta');
      return;
    }

    try {
      const total = totalPrice();
      const orden = {
        item: cart.map((producto) => ({
          id: producto.id,
          nombre: producto.name,
          cantidad: producto.quantity,
          precio: producto.price,
        })),
        total: total,
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        email,
      };

      const db = getFirestore();
      const updateStock = async (productoOrden) => {
        const productosRef = doc(db, 'products', productoOrden.id);
        const productoDoc = await getDoc(productosRef);

        if (!productoDoc.exists()) {
          throw new Error('El producto no esta disponible');
        }

        const stockActual = productoDoc.data().stock;

        await updateDoc(productosRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      };

      await Promise.all(orden.item.map(updateStock));

      const ordersCollection = collection(db, 'orders');
      const docRef = await addDoc(ordersCollection, orden);

      setOrdenId(docRef.id);
      setNombre('');
      setApellido('');
      setTelefono('');
      setEmail('');
      setEmailConfirmacion('');

      removeProduct();
      clearCart();

    } catch (error) {
      console.error('No se pudo procesar la orden', error);
      setError('No se pudo procesar la orden');
    }
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <h2>Complete el formulario para finalizar la compra.</h2>
      <form className='d-flex flex-column justify-content-end align-items-end' onSubmit={handleFormulario}>
        {cart.map((producto) => (
          <div key={producto.id}>
            <p>{''} {producto.name} {producto.quantity}</p>
            <p>{producto.price}</p>
            <p>Subtotal: {producto.price * producto.quantity}</p>
          </div>
        ))}
        <div className='mb-1'>
          <label className="lab-check mx-2">Nombre</label>
          <input
            className="input-check"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='mb-1'>
          <label className="lab-check mx-2">Apellido</label>
          <input
            className="input-check"
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className='mb-1'>
          <label className="lab-check mx-2">Telefono</label>
          <input
            className="input-check"
            type="number"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className='mb-1'>
          <label className="lab-check mx-2">Email</label>
          <input
            className="input-check"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-1'>
          <label className="lab-check mx-2">Confirmar Email</label>
          <input
            className="input-check"
            type="email"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        {ordenId && (
          <p>
            ¡Gracias por su compra! Su numero de orden es {' '} {ordenId}{' '}
          </p>
        )}
        <div>
          <button className='btn btn-secondary' type="submit" disabled={cart.length === 0}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
