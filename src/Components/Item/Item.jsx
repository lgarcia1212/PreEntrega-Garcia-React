import React from 'react'
import { Link } from 'react-router-dom'
import Contador from '../Contador'
import '../../App.css'

const Item = ({item}) => {
  return (
    <Link to={'/item/' + item.id} className='text-decoration-none'>
        <div className='container'>
            <div className='card border border-0'>
                <img src={item.image} className='card-img card-img-top' alt={item.name} />
                <div className='card-body text-center'>
                    <p children='card-text' className='card-title'>{item.name}</p>
                    <p>{item.description}</p>
                    <p className='card-price'>$ {item.price}</p>
                    <p>Cantidad: {item.stock}</p>
                    <Contador />

                </div>
            </div>
        
        </div>
    </Link>
    
  )
}

export default Item