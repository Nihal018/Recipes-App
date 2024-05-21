import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouritesContextProvider({ children }) {
  const [FavouriteMealIds, setFavouriteMealIds] = useState();

  function addFavourite(id) {
    setFavouriteMealIds((currentState) => {
      return [...currentState, id];
    });
  }

  function removeFavourite(id) {
    setFavouriteMealIds((currentState) => {
      return currentState.filter((mealId) => {
        mealId !== id;
      });
    });
  }

  const value = {
    ids: FavouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContextProvider;
