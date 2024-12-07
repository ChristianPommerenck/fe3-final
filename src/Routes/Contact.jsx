import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>Si tienes alguna duda llena este formulario</h2>
      <p>A la brevedad posible nos comunicaremos contigo</p>
      <Form/>
    </div>
  )
}

export default Contact