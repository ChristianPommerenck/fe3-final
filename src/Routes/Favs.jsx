import Card from "../Components/Card";
import { useGlobalContext } from "../Context/Context";


const Favs = () => {
  const { state } = useGlobalContext() ; 

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
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
