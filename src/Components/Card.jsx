import React from "react";
import { Link } from "react-router-dom";
import { useDentistaStates } from "../Context/Context";
import { useState } from "react";




const Card = ({ name, username, id }) => {
  const { dispatch } = useDentistaStates();
  
  const addFav = ()=>{
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    if (!storedFavs.some((fav) => fav.id === id)) {
      storedFavs.push({ id, name, username }); 
      localStorage.setItem('favs', JSON.stringify(storedFavs));
    // Aqui iria la logica para agregar la Card en el localStorage
  }
 }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={"/detail/" + id}>
         <img src="/images/doctor.jpg" alt={name} />
         <h3>{name}</h3>
         <h2>{username}</h2>
        </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
