import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";
import { nav, back, change } from "../Styles/Navbar.module.css";

const Navbar = () => {
  const { theme, toggleTheme, favs, setFavs } = useGlobalContext();  // Acceder al contexto global
  const navigate = useNavigate();

  return (
    <nav className={`${nav} ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      {/* Aquí deberían agregar los links correspondientes a las rutas definidas */}
      <button onClick={() => navigate(-1)} className={back}>&#11176;</button>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/contact">
        <h4>Contacto</h4>
      </Link>
      <Link to="/favs">
        <h4>Destacados</h4>
      </Link>
      {/* El botón para cambiar el tema */}
      <button className={change} onClick={toggleTheme}>{theme === "dark" ? "☀️" : "🌑"}</button>
    </nav>
  );
};

export default Navbar;