import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "90%",
    height: "22vh",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "15vw",
  },
}));

export default function Cards(props) {
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.count}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.link}
        title={props.title}
      />
    </Card>
  );
}
