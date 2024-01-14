import React from 'react'
import { useCartContext } from '../Context/CartContext'

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext()
  return (
    <div className='d-flex justify-content-center'>
        <img className='card-img' src={product.image} alt={product.name} />
        <div className='d-flex flex-column justify-content-center'>
            <p>Titulo: {product.name}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: {product.price}</p>
            <p>Subtotal: {product.quantity * product.price}</p>
            <button className='btn btn-secondary' onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart