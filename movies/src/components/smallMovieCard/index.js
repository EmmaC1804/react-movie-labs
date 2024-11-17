import CardMedia from "@mui/material/CardMedia";
//import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import PersonIcon from "@mui/icons-material/Person";
//import StarRateIcon from "@mui/icons-material/StarRate";
//import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid2";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";


const SimilarCard = ({ movie,action }) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 200 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid>
            <Typography variant="h6" component="p">
              {movie.title}

            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions disableSpacing>
      
    
    
      <Link to={`/actors/${movie.id}`}>
        <Button>
          <PersonIcon fontSize="small" />
        </Button>
      </Link>
      
    </CardActions>

    </Card>
  );
};
export default SimilarCard;