import React from 'react'
import Card from '../Components/Card'
import { useDentistaStates } from "../Context/Context";
import {lista, home} from "../Styles/Home.module.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useDentistaStates();
  return (
    <main className= {home} >
      <h1>Home</h1>
      <div className= {lista} >
        {state.dentista.map((dentista) => {
          return <Card key={dentista.id} id={dentista.id} name={dentista.name} username={dentista.username} dentista={dentista} />;
        })}
      </div>
    </main>
  )
}

export default Home