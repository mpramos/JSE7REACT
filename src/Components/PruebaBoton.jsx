import React from 'react'

function PruebaBoton({text,onClick}) {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

export default PruebaBoton