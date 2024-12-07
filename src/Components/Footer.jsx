import React from 'react'
import {foot, logoDH, power,DH} from "../Styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className= {foot}>
        <p className={power}>Powered by</p>
        <img src="/images/DH.png" alt='DH' className={logoDH}/>
        <img src="/DH.ico" alt='DH-logo'className={DH} />
       
    </footer>
  )
}

export default Footer
