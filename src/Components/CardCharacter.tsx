import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './CardCharacter.css'



interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardCharacter() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
let styles ={ 
  backgroundColor:'#3c3e44',
  color:'#e0e0e0',
  transform: 'translate(419px,10px)',
  marginBottom:'20px'
}

  return (
    <Card sx={{ maxWidth: 345 }} style={styles}>
      {/* <CardHeader 
        title="Octopus Man"
        subheader="Diciembre 1,2023"
      /> */}
      <CardMedia
        component="img"
        height="194"
        image="https://rickandmortyapi.com/api/character/avatar/254.jpeg"
        alt="Paella dish"

      />
      <CardContent>
        <Typography variant="h6">
            Alive - Humanoid
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color="warning" />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon color="warning" />
        </IconButton>
        <ExpandMore color='warning'
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography color={red[500]} paragraph>
          Last known location:
          </Typography>
          <Typography paragraph>
            Citadel of Ricks
          </Typography>
          <Typography>
          First seen in:
                  Pilot 
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
