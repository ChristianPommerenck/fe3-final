import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../reducers/reducer";

const DentistaStates = createContext();

const initialState = {
  dentista: [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [theme, setTheme] = useState("light");
  const [favs, setFavs] = useState(() => {
    const storedFavs = localStorage.getItem("favs");
    return storedFavs ? JSON.parse(storedFavs) : [];
  });
  
  
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_DENTISTAS", payload: res.data});
      
    });
  }, []);

  return (
    <DentistaStates.Provider value={{ favs, setFavs, state, dispatch, theme, setTheme }}>
      {children}
    </DentistaStates.Provider>
  );
};
export default Context;

export const useDentistaStates = () => useContext(DentistaStates);
