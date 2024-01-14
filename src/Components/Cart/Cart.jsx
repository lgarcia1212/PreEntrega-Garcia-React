import React from 'react';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import { useCartContext } from '../Context/CartContext';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>Carrito vacío</p>
        <Link to="/">Ver Productos</Link>
      </>
    );
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p className='fs-5 mt-5 mb-5'>Total: $ {totalPrice()}</p>

      <Link to="/checkout">
        {' '}
        <button className="btn btn-secondary">Terminar Compra</button>
      </Link>
    </div>
  );
};

export default Cart;
