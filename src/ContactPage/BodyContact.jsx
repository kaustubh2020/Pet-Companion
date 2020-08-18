import React from 'react';
import Form from "../Components/Form";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    headings: {
        width: "90%",
        transform: "translate(20px, 250px)",
        [theme.breakpoints.down("xs")]: {
            transform: "translate(25px, 80px)",
        },
    },

    textsizeh5: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "18px",
        },
    },

    textsizeh1: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "50px",
        },
    },

    textsizeh6: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "15px",
            marginTop: "5px",
        },
    },
})

);

function BodyHome() {
    const classes = useStyles();
    return (
        <div className={classes.headings}>
            <Form />
        </div>
    );
};

export default BodyHome;