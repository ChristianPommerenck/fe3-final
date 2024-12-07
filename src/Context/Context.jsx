import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";

// Contexto global
const GlobalContext = createContext();

const initialState = {
  dentista: [],
  theme: localStorage.getItem("theme") || "light", 
  favs: JSON.parse(localStorage.getItem("favs")) || [], 
}

// El contexto global maneja tanto el estado de dentista, favs y tema
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Guardar el tema en localStorage y actualizar el body cuando cambie el tema
  useEffect(() => {
    // Guardar el tema actual en localStorage
    localStorage.setItem("theme", state.theme);

    // Actualizar el body con la clase correspondiente
    document.body.classList.toggle("dark-theme", state.theme === "dark");
    document.body.classList.toggle("light-theme", state.theme === "light");
  }, [state.theme]); // Solo se ejecuta cuando el tema cambia

  const setTheme = (theme) => {
    dispatch({ type: "SET_THEME", payload: theme });
  };

  const toggleTheme = () => {
    // Alternar entre light y dark
    const newTheme = state.theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const setFavs = (newFavs) => {
    dispatch({ type: "SET_FAVS", payload: newFavs });
  };

  const url = "https://jsonplaceholder.typicode.com/users";

  // Guardar los favoritos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  // Cargar los dentistas
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
