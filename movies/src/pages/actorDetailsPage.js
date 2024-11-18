import React from "react";
import { useParams } from 'react-router-dom';
import ActorDetails from "../components/actorDetails/";
import CastDetails from "../components/castList"
import MovieCast from "../components/actorCard";
import CreditDetails from "../components/creditsList";
import PageTemplate from "../components/templateActorPage";
import { getCreditedMovies, getPerson} from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

//import useMovie from "../hooks/useMovie";

const ActorDetailsPage = (props) => {
  const { id } = useParams();

  //Is getting actor details
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getPerson,
  );

  const { data: credit, mError, mIsLoading, mIsError } = useQuery(
    ["credit", { id: id }],
    getCreditedMovies,
  );

  if (isLoading || mIsLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  else if (mIsError){
    return <h1>{mError.message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor}>
            <ActorDetails actor={actor} />
            {credit && credit.cast && credit.cast.length > 0 ? (
            <CreditDetails credit={credit.cast} />
          ) : (
            <p>No credited movie information available</p>
          )}
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;