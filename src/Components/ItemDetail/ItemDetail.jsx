import React from 'react'
import Contador from '../Contador'
import '../../App.css'

const ItemDetail = ({item}) => {
  return (
    <div className='row'>
          <div className='card iifset-md-4'>
          <img src={item.image} className='card-img' alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>$ {item.price}</p>
          <p>Cantidad: {item.stock}</p>
          <Contador />
        </div>
    </div> 
  )
}

export default ItemDetail