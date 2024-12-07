import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const Detail = () => {
  const [dentista, setDentista] = useState({});
  const { id } = useParams();
  console.log(id);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`; 
 
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
     
    </>
  )
}

export default Detail