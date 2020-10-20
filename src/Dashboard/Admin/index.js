import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Home, Person, Business } from '@material-ui/icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Studentdeatils from './studentdeatil'
import Studentdata from './studentdata'
import Companydata from './companydata'
import Companydeatil from './companydeatil'
const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
    },
    rooot: {
        // flexGrow: 1,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));
const drawerWidth = 200;


function DashboardAdmin() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [value, setValue] = React.useState(0);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar style={{ color: '#fff', background: '#335f00' }}
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap>
                        Admin Dashboard
                    </Typography >
                    <Typography variant="h5" noWrap style={{ marginLeft: 'auto', color: '#ffffff' }}>
                        <Button >
                            <Link style={{ color: '#ffffff', textDecoration: "none" }} to="/">Sign Out</Link>
                        </Button>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Paper>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    // textColor="primary"
                    centered
                >
                    {/* <Link style={{ textDecoration: 'none' }} to='/DashboardAdmin/studentdeatil'><Tab style={{ color: 'rgb(63 112 7)', fontSize: '12px' }} label="Student  " /></Link> */}
                    <Link style={{ textDecoration: 'none' }} to='/DashboardAdmin/studentdeatil'><Tab style={{ color: 'rgb(63 112 7)', fontSize: '12px' }} label="Student Deatils " /></Link>
                    <Link style={{ textDecoration: 'none' }} to='/DashboardAdmin/companydeatil'><Tab style={{ color: 'rgb(63 112 7)', fontSize: '12px' }} label="Company Deatils " /></Link>
                    <Link style={{ textDecoration: 'none' }} to='/DashboardAdmin/studentdata'><Tab style={{ color: 'rgb(63 112 7)', fontSize: '12px' }} label="Student Profile" /></Link>
                    <Link style={{ textDecoration: 'none' }} to='/DashboardAdmin/companydata'><Tab style={{ color: 'rgb(63 112 7)', fontSize: '12px' }} label="Company" /></Link>
                </Tabs>
            </Paper>
            <Route path="/DashboardAdmin/studentdeatil" component={Studentdeatils} />
            <Route path="/DashboardAdmin/studentdata" component={Studentdata} />
            <Route path="/DashboardAdmin/companydeatil" component={Companydeatil} />
            <Route path="/DashboardAdmin/companydata" component={Companydata} />
            {/* <h1>Home </h1> */}
            {/* <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
        </Button>
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
            </Card> */}
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List variant="h4">
                    <ListItem button>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <Link style={{ textDecoration: 'none', color: 'black', marginTop: '7px' }}><ListItemText primary="Home" /> </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <Link style={{ textDecoration: 'none', color: 'black', marginTop: '7px' }} to='/DashboardAdmin/studentdeatil'>  <ListItemText primary="Student" /></Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Business />
                        </ListItemIcon>
                        <Link style={{ textDecoration: 'none', color: 'black', marginTop: '7px' }} to='/DashboardAdmin/companydeatil'><ListItemText primary="Company" /></Link>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <Link style={{ textDecoration: 'none ', color: "#000" }} to="/">
                            <ListItemText primary="Log out" />
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
        </div >
    );
}

export default DashboardAdmin



