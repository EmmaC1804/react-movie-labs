import React, {useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import BirthdayIcon from "@mui/icons-material/Cake";
import PopularityIcon from "@mui/icons-material/TrendingUp";
import WorldIcon from "@mui/icons-material/Public"
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {  // Don't miss this!
    //const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Paper component="ul" sx={{...root}}>
        <Chip icon={<BirthdayIcon />} label={`${actor.birthday}`} />
        <Chip icon={<WorldIcon />} label={`${actor.place_of_birth}`} />
        <Chip icon={<PopularityIcon />} label={`${actor.popularity}`} />
      </Paper>
      </>
  );
};
export default ActorDetails ;