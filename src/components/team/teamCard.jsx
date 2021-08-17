import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    width: "300px",
    margin: 20,
    
  },
  card:{
    minHeight:"200px",
    maxHeight:"200px",
    padding:"5%",
    overflowY:"auto"
  },
  media: {
    height: 300,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
        />
        <CardContent className={classes.card}>
          <h1>{props.name}</h1>
          <p>{props.desc}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
