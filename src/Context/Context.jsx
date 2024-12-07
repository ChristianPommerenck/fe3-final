import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";


const GlobalContext = createContext();

const initialState = {
  dentista: [],
  theme: localStorage.getItem("theme") || "light", 
  favs: JSON.parse(localStorage.getItem("favs")) || [], 
}


const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  
  useEffect(() => {
    
    localStorage.setItem("theme", state.theme);

   
    document.body.classList.toggle("dark-theme", state.theme === "dark");
    document.body.classList.toggle("light-theme", state.theme === "light");
  }, [state.theme]); 

  const setTheme = (theme) => {
    dispatch({ type: "SET_THEME", payload: theme });
  };

  const toggleTheme = () => {

    const newTheme = state.theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const setFavs = (newFavs) => {
    dispatch({ type: "SET_FAVS", payload: newFavs });
  };

  const url = "https://jsonplaceholder.typicode.com/users";


  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

 
  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "GET_DENTISTAS", payload: res.data });
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        theme: state.theme,
        toggleTheme,
        favs: state.favs,
        setFavs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;

export const useGlobalContext = () => useContext(GlobalContext);
