import React from 'react';
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
        transform: "translate(25px, 80px)",
        [theme.breakpoints.down("xs")]: {
        },
    },

    textsizeh5: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "18px",
        },
    },

    textsizeh1: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "39px",
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

function BodyAbout() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h5" className={classes.textsizeh5}>
                at
            </Typography>
            <Typography variant="h1" className={classes.textsizeh1}>
                {" "}
                <span
                    style={{
                        backgroundColor: "#ff6ec7",
                        color: "white",
                        borderRadius: "20px",
                        padding: "5px",
                    }}
                >
                    Pet Companion,
              </span>
            </Typography>
            <Typography variant="h6" className={classes.textsizeh6}>
                we’re much the same as your pets – well disposed, fun loving and absolutely stand-out. That is on the grounds that we don’t simply convey your pet sustenance, we become more acquainted with you and your little ‘Organization Name’ s, so we can assist you with keeping them upbeat from make a beeline for tail.
            </Typography>
        </div>
    );
};

export default BodyAbout;