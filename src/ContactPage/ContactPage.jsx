import React from "react";
import BodyContact from "./BodyContact";
import Footer from "../Components/Footer";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage:
            "url(https://images.unsplash.com/photo-1591561228229-dcb782fcf6e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
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
            <BodyContact />
            <Footer />
        </div>
    );
}

export default HomePage;
