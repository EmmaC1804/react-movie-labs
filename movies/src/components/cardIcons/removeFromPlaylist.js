import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromPlaylist = (e) => {
    e.preventDefault();
    context.removeFromPlaylist(movie);
  };
  return (
    <IconButton
      aria-label="remove from playlist"
      onClick={handleRemoveFromPlaylist}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromPlaylistIcon;