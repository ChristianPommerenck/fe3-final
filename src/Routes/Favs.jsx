import Card from "../Components/Card";
import { useGlobalContext } from "../Context/Context";
import {favoritos} from "../Styles/Favoritos.module.css"


const Favs = () => {
  const { state } = useGlobalContext() ; 

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={favoritos}>
      {state.favs.length > 0 ? (
          state.favs.map((dentista) => (
            <Card key={dentista.id} dentista={dentista} />
          ))
        ) : (
          <p>No tienes dentistas favoritos</p>
        )}
      
      </div>
    </>
  );
};

export default Favs;
