import React from 'react'
import {useParams} from 'react-router-dom'

const TintoId = () => {

  const {id} = useParams();

  return (
    <div>
      <h3>producto con id: {id}</h3>
    </div>
  )
}

export default TintoId