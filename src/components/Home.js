import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../styles/App.css";
import Nav from "./Nav";
import profile from "../images/me.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className="App">
      <Grid container spacing={1} justify="flex-start">
        <Grid item sm={12} md={1}>
          <Paper className={classes.paper}>
            <Nav />
          </Paper>
        </Grid>
        <Grid item sm={12} md={3} className="intro">
          <h1>HI!</h1>
          <h3>I am a Software Engineer, Graphic Designer, and Musician</h3>
        </Grid>
        <Grid item sm={12} md={6}>
          <img alt="complex" src={profile} />
        </Grid>
      </Grid>
    </div>
  );
}
