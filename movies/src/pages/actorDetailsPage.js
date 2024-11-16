import React from "react";
import { useParams } from 'react-router-dom';
import ActorDetails from "../components/actorDetails/";
import CastDetails from "../components/castList"
import MovieCast from "../components/actorCard";
import PageTemplate from "../components/templateActorPage";
import { getPerson} from '../api/tmdb-api'
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

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor}>
            <ActorDetails actor={actor} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;