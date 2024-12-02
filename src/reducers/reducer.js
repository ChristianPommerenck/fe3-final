export const reducer = (state, action) => {
    switch (action.type) {
      case "GET_DENTISTAS":
        return { ...state, dentista: action.payload };
      default:
        throw new Error("Acción no existente");
    }
};