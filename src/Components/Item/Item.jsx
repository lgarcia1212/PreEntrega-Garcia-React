import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Item = ({ item }) => {
  return (
    <Link to={'/item/' + item.id} className='text-decoration-none'>
      <div className='container d-flex justify-content-center aling-items-center'>
        <div className='d-flex justify-content-center aling-items-center flex-column border border-secondary shadow p-3 mb-5 bg-body-tertiary rounded'>
          <img src={item.image} className='card-img card-img-top' alt={item.name} />
          <div className='card-body text-center'>
            <p children='card-text' className='card-title'>{item.name}</p>
            <p>{item.description}</p>
            <p className='card-price'>$ {item.price}</p>
            <p>Cantidad: {item.stock}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
