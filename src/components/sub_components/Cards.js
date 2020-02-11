import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import Link from "@material-ui/core/Link";

// import seal from "./sealpup.jpg";
const useStyles = makeStyles({
  card: {
    transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
    "&:hover": {
      transform: "translateY(-5px)"
    }
  }
});

function ContentCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Waving photogenic seal"
          image="./sealpup.jpg"
          title="Photogenic Seal Pup"
        />
        <CardContent>
          <Typography color="secondary">{props.title}</Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          <Link color="textPrimary" href={props.code} target="_blank">
            View Code
          </Link>
        </Button>
        <Button size="small" color="primary">
          <Link color="textSecondary" href={props.external} target="_blank">
            Live Demo
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ContentCard;
