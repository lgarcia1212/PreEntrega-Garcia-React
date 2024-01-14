import React, { useState } from 'react';

const Contador = ({ maxStock, onAdd }) => {
  const [contador, setContador] = useState(1);

  const handleIncrement = () => {
    if (contador < maxStock) {
      setContador((prevContador) => prevContador + 1);
    }
  };

  const handleDecrement = () => {
    if (contador > 1) {
      setContador((prevContador) => prevContador - 1);
    }
  };

  const handleAddToCart = () => {
    if (contador <= maxStock) {
      onAdd(contador);
    } else {
      alert('No hay suficiente stock.');
      setContador(maxStock);
    }
  };

  return (
    <div className='counter'>
      <button className='btn btn-secondary' onClick={handleIncrement} disabled={contador === maxStock}>
        +
      </button>
      <h3>{contador}</h3>
      <button className='btn btn-secondary' onClick={handleDecrement} disabled={contador === 1}>
        -
      </button>
      <button className='btn btn-secondary' onClick={handleAddToCart}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default Contador;
