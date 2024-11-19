import React, {useState, useEffect} from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/ImportExport";
import FilterIcon from "@mui/icons-material/FilterList";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import { getGenres,getMovie } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

export default function FilterMoviesCard(props) {

  const { data, error, isLoading, isError } = useQuery("genres", getGenres);
  const { movie, mError, mIsLoading, mIsError} = useQuery("movies", getMovie);

  if (isLoading || mIsLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  else if(mIsError){
    return <h1>{mError.message}</h1>;
  }

  const genres = data.genres;
  if (genres[0].name !== "All"){
    genres.unshift({ id: "0", name: "All" });
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };
/*
  const handleSliderChange = (e,newValue) => {
    props.onSliderInput(newValue);
  };

  const handleDurationChange = (e, newValue) => {
    handleSliderChange(e, newValue);
  };
*/
  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };


  return (
    <Card 
      sx={{
        backgroundColor: "rgb(50, 168, 155)"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Searching.
        </Typography>
        <TextField
      sx={{...formControl}}
      id="filled-search"
      label="Title Search"
      type="search"
      variant="filled"
      value={props.titleFilter}
      onChange={handleTextChange}
    />

<TextField
      sx={{...formControl}}
      id="filled-search"
      label="Keyword Search"
      type="search"
      variant="filled"
     // value={props.titleFilter}
      onChange={handleTextChange}
    />


<Typography variant="h5" component="h1">
          <FilterIcon fontSize="large" />
          Filtering.
        </Typography>
        <FormControl sx={{...formControl}}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
    labelId="genre-label"
    id="genre-select"
    defaultValue=""
    value={props.genreFilter}
    onChange={handleGenreChange}
  >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <Typography variant="h8">
          Duration:
        </Typography>
        <Slider
      //  value={props.durationFilter}
      //  onChange={handleDurationChange}
        valueLabelDisplay="auto"
        step={20}
        marks
        defaultValue={200}
        min={60}
        max={200}
       // getAriaValueText={valuetext}
      />

        <Typography variant="h5" component="h1">
          <SortIcon fontSize="large" />
          Sorting.
        </Typography>

      </CardContent>
      
    </Card>
  );
}