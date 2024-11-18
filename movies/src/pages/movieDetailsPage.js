import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import CastDetails from "../components/castList"
import SimilarMovie from "../components/similarList";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMovieCast, getSimilarMovie} from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

//import useMovie from "../hooks/useMovie";

const MoviePage = (props) => {
  const { id } = useParams();
  
  //Is getting movie details
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie,
  );

  //Is getting actor details
  const { data: cast, castError, isCastLoading, isCastError } = useQuery(
    ["movieCast", { id: id }],
    getMovieCast,
  );

  //Is getting similar movie details
  const { data: similar, sError, sIsLoading, sIsError } = useQuery(
    ["similar", { id: id }],
    getSimilarMovie,
  );

  if (isLoading || isCastLoading || sIsLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  else if(isCastError){
    return <h1>{castError.message}</h1>;
  }
  else if(sIsError){
    return <h1>{sError.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            {cast && cast.cast && cast.cast.length > 0 ? (
            <CastDetails cast={cast.cast} />
          ) : (
            <p>No cast information available</p>
          )}
          {similar && similar.results && similar.results.length > 0 ? (
            <SimilarMovie similar={similar.results} />
          ) : (
            <p>No similar movies found</p>
          )}
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;