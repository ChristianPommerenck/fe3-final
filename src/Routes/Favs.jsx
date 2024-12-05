import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useDentistaStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favs } = useDentistaStates() ; 

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {favs.length > 0 ? (
          favs.map((dentista) => (
            <Card key={dentista.id} dentista={dentista} />
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
