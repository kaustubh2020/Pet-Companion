import React from "react";
import Footer from "../Components/Footer";
import AboutPage from "./BodyAbout";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage:
            "url(https://images.unsplash.com/photo-1517451330947-7809dead78d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
        backgroundSize: "cover",
        height: "100vh",
        [theme.breakpoints.down("xs")]: {
            backgroundImage:
                "url(https://images.pexels.com/photos/4048101/pexels-photo-4048101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
        },
    },
}));

function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AboutPage />
            <Footer />
        </div>
    );
}

export default HomePage;
