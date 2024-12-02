import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentista, setDentista] = useState({});
  const { id } = useParams();
  console.log(id);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`; 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data);
        setDentista(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Detalles del Dentista</h1>
    {dentista.name ? (
      <>
        <img src="/images/doctor.jpg" alt={dentista.name} />
        <h2>{dentista.name}</h2>
        <p>{dentista.email}</p>
        <p>{dentista.phone}</p>
        <p>{dentista.website}</p>
      </>
    ) : (
      <p>Cargando información...</p>
    )}
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail