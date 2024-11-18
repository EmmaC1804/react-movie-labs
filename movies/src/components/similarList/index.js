import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";


const SimilarMovie = ({ similar }) => {  // Don't miss this!
    if (!Array.isArray(similar) || similar.length === 0) {
        return <Typography>No similar movie information available</Typography>;
    }
    //const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
     <Typography  variant="h5" component="h3"> Similar Movies </Typography>
    <Paper component="div" sx={{ display: 'flex', justifyContent: 'space-around', p: 2 }}>
      {similar.slice(0, 5).map((similar) => (
        <Grid key={similar.id} sx={{ padding: "8px"}}>
          <img
              src={`https://image.tmdb.org/t/p/w200${similar.poster_path}`}
            />
            <Typography variant="h7" component="p">
              {similar.title}

              <Link to={`/movies/${similar.id}`}>
                <Button>
                   <InfoIcon fontSize="small" />
                 </Button>
              </Link>
            </Typography>
        </Grid>
      ))}
    </Paper>
      </>
  );
};
export default SimilarMovie ;
