import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";


const CreditedMovie = ({ credit }) => {  // Don't miss this!
    if (!Array.isArray(credit) || credit.length === 0) {
        return <Typography>No Credited movie information available</Typography>;
    }
    //const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
     <Typography  variant="h5" component="h3"> Credited Movies </Typography>
    <Paper component="div" sx={{ display: 'flex', justifyContent: 'space-around', p: 2 }}>
      {credit.slice(0, 5).map((credit) => (
        <Grid key={credit.id} sx={{ padding: "8px"}}>
          <img
              src={`https://image.tmdb.org/t/p/w200${credit.poster_path}`}
            />
            <Typography variant="h7" component="p">
              {credit.title}

              <Link to={`/movies/${credit.id}`}>
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
export default CreditedMovie ;