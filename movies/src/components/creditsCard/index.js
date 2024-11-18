import React, { useContext  } from "react";
//import { MoviesContext } from "../../contexts/moviesContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
//import StarRateIcon from "@mui/icons-material/StarRate";
//import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid2";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";


const CreditsCard = ({ credit }) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 200 }}
        image={
          credit.poster_path
            ? `https://image.tmdb.org/t/p/w200/${credit.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid>
            <Typography variant="h6" component="p">
              {credit.title}

            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions disableSpacing>
      
    
    
      <Link to={`/movies/${credit.id}`}>
        <Button>
          <InfoIcon fontSize="small" />
        </Button>
      </Link>
      
    </CardActions>

    </Card>
  );
};
export default CreditsCard;