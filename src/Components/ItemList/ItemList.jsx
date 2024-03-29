import React from 'react'
import Item from '../Item/Item'

const ItemList = ({item}) => {
  return (
    <div className='row d-flex justify-content-center'>
        {item.map(item => 
            <div className='col-md-4' key={item.id}>

                <Item item={item} />

            </div>)}
    </div>
  )
}

export default ItemList