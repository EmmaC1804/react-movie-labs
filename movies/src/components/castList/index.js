import React, {useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import LanguageIcon from "@mui/icons-material/Language"
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import ActorCard from "../actorCard";


const MovieCast = ({ cast }) => {  // Don't miss this!
    if (!Array.isArray(cast) || cast.length === 0) {
        return <Typography>No cast information available</Typography>;
    }
    //const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
    <Paper component="div" sx={{ display: 'flex', justifyContent: 'space-around', p: 2 }}>
      {cast.slice(0, 6).map((actor) => (
        <Box key={actor.cast_id} sx={{ margin: 1 }}>
          <ActorCard actor={actor} />
        </Box>
      ))}
    </Paper>
      </>
  );
};
export default MovieCast ;