import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import Contador from '../Contador';
import '../../App.css';

const ItemDetail = ({ item }) => {
  const { addProduct, getCartItemQuantity } = useCartContext();

  const onAdd = (quantity) => {
    const currentQuantityInCart = getCartItemQuantity(item.id);
    const totalQuantityToAdd = currentQuantityInCart + quantity;

    if (totalQuantityToAdd <= item.stock) {
      addProduct(item, quantity);
    } else {
      alert('No hay suficiente stock.');
    }
  };

  return (
    <div className='row'>
      <div className='card offset-md-4'>
        <img src={item.image} className='card-img' alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>$ {Number(item.price)}</p>
        <p>Cantidad: {item.stock}</p>
        <div>
          <Contador maxStock={item.stock} onAdd={onAdd} />
        </div>
        <div>
          <Link className='btn btn-secondary' to='/cart'>Ir a Finalizar Compra</Link>
        </div>
        </div>
    </div>
  );
};

export default ItemDetail;