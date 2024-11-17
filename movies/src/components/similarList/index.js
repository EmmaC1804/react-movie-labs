import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SmallCard from "../smallMovieCard";


const SimilarMovie = ({ similar }) => {  // Don't miss this!
    if (!similar || similar.length === 0) {
        return <Typography>No similar movie information available</Typography>;
    }
    //const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
     <Typography  variant="h5" component="h3"> Similar Movie </Typography>
    <Paper component="div" sx={{ display: 'flex', justifyContent: 'space-around', p: 2 }}>
      {similar.slice(0, 4).map((m) => (
        <Grid key={m.id} sx={{ padding: "8px"}}>
          <SmallCard m={m} />
        </Grid>
      ))}
    </Paper>
      </>
  );
};
export default SimilarMovie ;
