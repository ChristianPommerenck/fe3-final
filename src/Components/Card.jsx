import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import { useGlobalContext } from "../Context/Context";  
import { card, img, presentacion, h2, h3, favButton } from "../Styles/Card.module.css";

const Card = ({ dentista }) => {
  const { theme, favs, dispatch } = useGlobalContext();  
 

 
  const addFav = () => {
    dispatch({
      type: "TOGGLE_FAV",
      payload: dentista,
    });
  };



 
  const cardClass = `${card} ${theme === "dark" ? "dark-theme" : "light-theme"}`;
  const textClass = theme === "dark" ? "dark-text" : "light-text";

  return (
    <div className={cardClass}>
   
      <Link to={"/detail/" + dentista.id}>
        <img src="/images/doctor.jpg" alt={dentista.name} className={img} />
        <div className={presentacion}>
          <h3 className={`${h3} ${textClass}`}>{dentista.name}</h3>
          <h2 className={`${h2} ${textClass}`}>{dentista.username}</h2>
        </div>
      </Link>

    
        <button 
          onClick={addFav} 
          className={favButton}
        >
          {favs.some((fav) => fav.id === dentista.id) ? "Remove fav" : "Add fav"}
        </button>
  
    </div>
  );
};

export default Card;
