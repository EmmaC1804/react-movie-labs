import React from "react";
import { getNowPlayingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const NowPlayingPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('nowPlaying', getNowPlayingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const nowPlaying = movies.filter(m => m.mowPlaying)
  localStorage.setItem('nowPlaying', JSON.stringify(nowPlaying))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="In Cinema"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);

};
export default NowPlayingPage;