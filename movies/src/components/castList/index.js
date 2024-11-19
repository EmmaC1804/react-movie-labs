import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ActorCard from "../actorCard";


const MovieCast = ({ cast }) => {  // Don't miss this!
    if (!Array.isArray(cast) || cast.length === 0) {
        return <Typography>No cast information available</Typography>;
    }
    //const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
     <Typography  variant="h5" component="h3"> Cast </Typography>
    <Paper component="div" sx={{ display: 'flex', justifyContent: 'space-around', p: 2 }}>
      {cast.slice(0, 7).map((actor) => (
        <Grid key={actor.cast_id} size={3} sx={{ padding: "8px"}}>
          <ActorCard actor={actor} />
        </Grid>
      ))}
    </Paper>
      </>
  );
};
export default MovieCast ;