import React from "react";
import Footer from "../Components/Footer";
import BodyHome from "./BodyHome";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "url(https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
    backgroundSize: "cover",
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      backgroundImage:
        "url(https://images.pexels.com/photos/4587987/pexels-photo-4587987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
    },
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BodyHome />
      <Footer />
    </div>
  );
}

export default HomePage;
