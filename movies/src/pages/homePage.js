import React from "react";
import { getMovies,getMovies2 } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import Grid from "@mui/material/Grid2";
import { Pagination } from "@mui/material";
import Button from "@mui/material/Button";

const HomePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)
  //const { data2, error2, isLoading2, isError2} = useQuery('discover', getMovies2)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
 // else if (isError2){
 //   return <h1>{error2.message}</h1>
 // }

  const movies = data.results;
  //const movies2 = data2.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
   // <Grid>
   //    <Button variant="outlined" onClick={() => 
    <PageTemplate
      title="Discover"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
 // }> 1</Button>  
    
  //  <Button variant="outlined"onClick={() => 
  //  <PageTemplate
  //    title="Discover"
   //   movies2={movies2}
   //   action={(movie) => {
   //     return <AddToFavoritesIcon movie={movie} />
   //   }}
   // />
 // }> 2 </Button>
  //  </Grid>
);

};
export default HomePage;