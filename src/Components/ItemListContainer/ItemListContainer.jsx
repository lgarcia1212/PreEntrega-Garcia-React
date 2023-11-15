import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h2 className='item-list-container'>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer