import React, {useContext} from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";

const MustWatchIcon = ({ movie }) => {
    const context = useContext(MoviesContext);
  
    const handleAddToMustWatch = (e) => {
      e.preventDefault();
      context.addToMustWatch(movie);
    };
  
    return (
      <IconButton aria-label="add to Must Watch" onClick={handleAddToMustWatch}>
       <PlaylistAddIcon color="primary" fontSize="large" />
      </IconButton>
    );
  };

export default MustWatchIcon;