import React from 'react'
import Form from '../Components/Form'
import {contact} from "../Styles/Contact.module.css"

const Contact = () => {
  return (
    <div className={contact}>
      <h2>Si tienes alguna duda llena este formulario</h2>
      <p>A la brevedad posible nos comunicaremos contigo</p>
      <Form/>
    </div>
  )
}

export default Contact