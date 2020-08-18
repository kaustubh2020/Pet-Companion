import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import Logo from "../images/logo.png";

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && (
                <Box style={{ width: "100%" }}>
                    <div> {children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar style={{ backgroundColor: "#1E201F" }} position="fixed">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="About" {...a11yProps(1)} />
                    <Tab label="Contact" {...a11yProps(2)} />
                    <img src={Logo} alt="logo" style={{ position: "absolute", right: "25px", height: "100%" }} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <HomePage />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AboutPage />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ContactPage />
            </TabPanel>
        </div>
    );
}
