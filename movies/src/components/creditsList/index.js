import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import CreditsCard from "../creditsCard";


const CreditedMovie = ({ credit }) => {  // Don't miss this!
    if (!Array.isArray(credit) || credit.length === 0) {
        return <Typography>No Credited movie information available</Typography>;
    }
    //const [drawerOpen, setDrawerOpen] = useState(false);

    return (
      <>
       <Typography  variant="h6" component="h3"> Credited Movies </Typography>
      <Paper component="div" sx={{ display: 'flex', justifyContent: 'space-around', p: 2 }}>
        {credit.slice(0, 6).map((movie) => (
          <Grid key={movie.id} size={4} sx={{ padding: "8px"}}>
            <CreditsCard credit={movie} />
          </Grid>
        ))}
      </Paper>
        </>
    );
  };
export default CreditedMovie ;