import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";

const DentistaStates = createContext();

const initialState = {
  dentista: [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [cart, setCart] = useState([]);
  // const [recipes, setRecipes] = useState([]);
  // console.log(cart);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_DENTISTAS", payload: res.data});
      // setRecipes(res.data.recipes);
    });
  }, []);

  return (
    <DentistaStates.Provider value={{ state, dispatch }}>
      {children}
    </DentistaStates.Provider>
  );
};
export default Context;

export const useDentistaStates = () => useContext(DentistaStates);
