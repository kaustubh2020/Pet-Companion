import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: "black",
    },
    footerlink: {
        fontFamily: "'MuseoModerno', cursive",
        color: "#FCE100",
        textDecoration: "none",
    },
    icons: {
        fontSize: "20px",
        padding: "0 20px",
        paddingTop: "2px",
    },
}));

function HomePage() {
    const classes = useStyles();

    return (
        <div>
            <AppBar
                className={classes.appBar}
                position="fixed"
            >
                <div style={{ textAlign: "center" }}>
                    <a
                        className={classes.footerlink}
                        href="https://github.com/kaustubh2020"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FacebookIcon className={classes.icons} />
                    </a>

                    <a
                        className={classes.footerlink}
                        href="https://github.com/kaustubh2020"
                        target="_blank"
                        rel="noopener noreferrer">
                        <TwitterIcon className={classes.icons} />
                    </a>

                    <a
                        className={classes.footerlink}
                        href="https://github.com/kaustubh2020"
                        target="_blank"
                        rel="noopener noreferrer">
                        <GitHubIcon className={classes.icons} />
                    </a>

                    <a
                        className={classes.footerlink}
                        href="https://github.com/kaustubh2020"
                        target="_blank"
                        rel="noopener noreferrer">
                        <InstagramIcon className={classes.icons} />
                    </a>

                </div>
                <Typography color="inherit" variant="subtitle2" align="center">
                    Made with{" "}
                    <span role="img" aria-label="icon">💛</span>
                    {" "}by{" "}
                    <a
                        className={classes.footerlink}
                        href="https://github.com/kaustubh2020"
                        target="_blank"
                        rel="noopener noreferrer">
                        Kaustubh Jaiswal.
                        </a>
                </Typography>
            </AppBar>
        </div>
    );
}

export default HomePage;