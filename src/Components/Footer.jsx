import React from 'react'
import {foot, logoDH} from "../Styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className= {foot}>
        <p>Powered by</p>
        <img src="/public/images/DH.png" alt='DH' className={logoDH}/>
        <img src="/public/DH.ico" alt='DH-logo' />
       
    </footer>
  )
}

export default Footer
