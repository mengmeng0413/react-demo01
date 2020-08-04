import React from 'react'
import PropTypes from 'prop-types';
import {makeStyles,useTheme}  from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import m from '../../material/material'
import "./Ui.less"
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return(
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tanpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}    
        >
            {value === index && (
                <m.Box p={3}>
                    <m.Typography>{children}</m.Typography>
                </m.Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tan-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
}));

function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root} className="root-div">
            <m.AppBar position="static" color="default">
                <m.Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <m.Tab label="Item One" {...a11yProps(0)} />
                    <m.Tab label="Item Two" {...a11yProps(1)} />
                    <m.Tab label="Item Three" {...a11yProps(2)} />
                </m.Tabs>
            </m.AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel>
            </SwipeableViews>
        </div>
    )
}

class Ui extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <FullWidthTabs/>
            </div>
        )
    }
   
}

export default Ui