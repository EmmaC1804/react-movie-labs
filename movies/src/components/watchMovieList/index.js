import React from "react";
import Movie from "../watchListCard/";
import Grid from "@mui/material/Grid2";

const WatchMovieList = (props) => {
  let watchListCards = props.movies.map((m) => (
    <Grid key={m.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
      <Movie key={m.id} movie={m} action={props.action}/>
    </Grid>
  ));
  return watchListCards;
};

export default WatchMovieList;