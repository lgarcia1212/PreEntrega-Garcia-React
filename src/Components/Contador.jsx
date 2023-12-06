import React, { useState } from 'react'

const Contador = () => {
    const [contador, setContador] = useState(0);

  return (
    <div className='contador'>
        <button className='contador-button' onClick={()=>setContador (contador +1)}>+</button>   
        <h3>{contador}</h3> 
        <button className='contador-button' onClick={()=>setContador (contador -1)}>-</button>
    </div>
  )
}

export default Contador