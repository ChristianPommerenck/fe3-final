import { Link, useNavigate } from "react-router-dom";
import React from 'react' 
import {nav, back,change} from "../Styles/Navbar.module.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className={nav}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <button onClick={() => navigate(-1)} className={back}>🔙</button>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/contact">
        <h4>Contacto</h4>
      </Link>
      <Link to="/detail">
        <h4>Detalles Dentista</h4>
      </Link>
      <Link to="/favs">
        <h4>Destacados</h4>
      </Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className={change}>Change theme</button>
    </nav>
  )
}

export default Navbar