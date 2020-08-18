import React from 'react';
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
        transform: "translate(2%, 100%)",
        [theme.breakpoints.down("xs")]: {
        },
    },

    textsizeh5: {
        paddingLeft: "50px",
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
        paddingLeft: "50px",
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
        <div className={classes.root}>
            <Typography variant="h5" className={classes.textsizeh5}>
                LIFE IS NOT EASY
            </Typography>
            <Typography variant="h1" className={classes.textsizeh1}>
                Tired of being{" "}
                <span
                    style={{
                        backgroundColor: "#ff6ec7",
                        color: "white",
                        borderRadius: "20px",
                        padding: "5px",
                    }}
                >
                    cute?
              </span>
            </Typography>
            <Typography variant="h6" className={classes.textsizeh6}>
                WAKE UP / FIND A FRIEND / HAVE A GOOD DAY
            </Typography>
        </div>
    );
};

export default BodyHome;