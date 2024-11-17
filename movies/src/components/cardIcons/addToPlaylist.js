import React, {useContext} from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";

const MustWatchIcon = ({ movie }) => {
    const context = useContext(MoviesContext);
  
    const handleAddToPlaylist = (e) => {
      e.preventDefault();
      context.addToPlaylist(movie);
    };
  
    return (
      <IconButton aria-label="add to Must Watch" onClick={handleAddToPlaylist}>
       <PlaylistAddIcon color="primary" fontSize="large" />
      </IconButton>
    );
  };

export default MustWatchIcon;