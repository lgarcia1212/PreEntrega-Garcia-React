import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../Context/CartContext';

const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return (
    <div className="container">
      <button>
        <FaShoppingCart className='cart-widget' />
        {totalProducts() > 0 && <span>{totalProducts()}</span>}
      </button>
    </div>
  );
};

export default CartWidget;
