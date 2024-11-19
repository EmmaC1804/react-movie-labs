import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";
import { Pagination } from "@mui/material";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
 // const [durationFilter, setDurationFilter] = useState(200);
  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });
    /*
    .filter((m) => {
      return m.runtime < durationFilter;
    });
   */


  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if(type === "genre") setGenreFilter(value);
  };
/*
  const handleSliderChange = (newValue) => {
    setDurationFilter(newValue);
  }
*/
  return (
    <Grid container
    sx={{
      backgroundColor: "rgb(240,238,211)"
    }} 
    >
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <Grid 
          key="find" 
          size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} 
          sx={{padding: "20px"}}
        >
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
           // onSliderInput={handleSliderChange}
          //  durationFilter={durationFilter}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
     
    </Grid>
  );
}
export default MovieListPageTemplate;