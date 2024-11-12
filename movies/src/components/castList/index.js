import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ActorCard from "../actorCard";


const MovieCast = ({ cast }) => {  // Don't miss this!
    if (!Array.isArray(cast) || cast.length === 0) {
        return <Typography>No cast information available</Typography>;
    }
    //const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
    <Paper component="div" sx={{ display: 'flex', justifyContent: 'space-around', p: 2 }}>
      {cast.slice(0, 8).map((actor) => (
        <Box key={actor.cast_id} sx={{ margin: 1 }}>
          <ActorCard actor={actor} />
        </Box>
      ))}
    </Paper>
      </>
  );
};
export default MovieCast ;