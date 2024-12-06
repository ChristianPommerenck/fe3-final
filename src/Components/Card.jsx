import React from "react";
import { Link } from "react-router-dom";
import { useDentistaStates } from "../Context/Context";
import {card, img, link, presentacion, h2, h3, favButton} from "../Styles/Card.module.css"




const Card = ({ dentista }) => {

  const { setFavs } = useDentistaStates();  
  const addFav = () => {
    setFavs((prevFavs) => {
      const exists = prevFavs.some((fav) => fav.id === dentista.id);
  
      if (exists) {
        return prevFavs.filter((fav) => fav.id !== dentista.id);
      } else {
        return [...prevFavs, dentista];
      }
    });
  };

 const showFavButton = location.pathname === "/";

  return (
    <div className={card}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={"/detail/" + dentista.id} className={link}>
         <img src="/images/doctor.jpg" alt={dentista.name} className={img} />
         <div className={presentacion}>
         <h3 className={h3}>{dentista.name}</h3>
         <h2 className={h2}>{dentista.username}</h2>
         </div>
         
        </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {showFavButton && (
        <button onClick={addFav} className={favButton}>
          Add fav
        </button>
      )}
    </div>
      
  );
};

export default Card;
