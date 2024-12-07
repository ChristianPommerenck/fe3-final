export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTAS":
      return { ...state, dentista: action.payload };
    case "SET_FAVS":
      return { ...state, favs: action.payload };
    case "TOGGLE_FAV": {
      const exists = state.favs.some((fav) => fav.id === action.payload.id);
      const updatedFavs = exists
        ? state.favs.filter((fav) => fav.id !== action.payload.id) // Eliminar de favoritos
        : [...state.favs, action.payload]; // Agregar a favoritos
      return { ...state, favs: updatedFavs };
    }
    case "SET_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};