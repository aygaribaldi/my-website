import React, { useLayoutEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import "../styles/App.css";
import Nav from "./Nav";
import profile from "../images/profile.svg";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size[0];
}

export default function Home() {
  return (
    <div
      className={`background${useWindowSize() < 960 ? "mobile" : "desktop"}`}
    >
      <Grid item container spacing={2}>
        <Grid item sm={12} md={1}>
          <Nav />
        </Grid>
        <Grid alignItems="stretch" item sm={12} md={4}>
          <h1>HI!</h1>
          <h3>I'm a software engineer, graphic designer, and musician</h3>
        </Grid>
        <Grid item sm={12} md={7}>
          <img src={profile} alt="profile" />
        </Grid>
      </Grid>
    </div>
  );
}
