import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} )
  const [mustWatch, setPlaylist] = useState( [] )

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);

  const addToPlaylist = (movie) => {
    let newMustWatch = [];
    if (!mustWatch.includes(movie.id)){
      newMustWatch = [...mustWatch, movie.id];
    }
    else{
      newMustWatch = [...mustWatch];
    }
    setPlaylist(newMustWatch)
  };
  console.log(mustWatch);
  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const removeFromPlaylist = (movie) => {
    setPlaylist( mustWatch.filter(
      (mId) => mId !== movie.id
    ) )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        mustWatch,
        addToPlaylist,
        removeFromPlaylist
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;