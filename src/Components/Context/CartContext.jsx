import React, { useState, useContext } from 'react';

const CartContext = React.createContext('');

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart((prevCart) =>
        prevCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity }]);
    }
  };

  const totalPrice = () =>
    cart.reduce((prev, act) => prev + act.quantity * act.price, 0);

const totalProducts = () =>
  cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

  const clearCart = () => setCart([]);

  const isInCart = (id) => !!cart.find((product) => product.id === id);

  const removeProduct = (id) =>
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));

  const getCartItemQuantity = (productId) => {
    const itemInCart = cart.find((item) => item.id === productId);
    return itemInCart ? itemInCart.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        getCartItemQuantity,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
