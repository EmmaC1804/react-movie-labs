import React from "react";
import { getTopRatedMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const TopRatedPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('topRated', getTopRatedMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const topRated = movies.filter(m => m.topRated)
  localStorage.setItem('topRated', JSON.stringify(topRated))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Top Rated"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);

};
export default TopRatedPage;