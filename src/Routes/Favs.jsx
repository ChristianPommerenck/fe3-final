import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favDentistas, setFavDentistas] = useState([]);
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavDentistas(storedFavs);
  }, []); 

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {favDentistas.length > 0 ? (
          favDentistas.map((dentista) => (
            <Card key={dentista.id} {...dentista} />
          ))
        ) : (
          <p>No tienes dentistas favoritos</p>
        )}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
