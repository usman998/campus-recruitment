import React from 'react';
import {  AppBar, Toolbar, IconButton, Button, Typography,Menu ,MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

import {
    BrowserRouter as Router, Link
} from "react-router-dom";


function CustomNavbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position="static" style={{ color: '#fff', background: '#335f00' }}>
            <Toolbar>
                {/* <IconButton edge="start"
                    // className={classes.menuButton}
                    color="inherit" aria-label="menu">
                    <MenuIcon  />
                </IconButton> */}
                <Typography variant="h6"
                ><Link style={{ color: '#ffffff', textDecoration: "none" }} to="/">Campus Recruitment</Link>
                </Typography>
                <Typography style={{ marginLeft: 'auto', color: '#ffffff', fontSize: '1 rem' }}>
                    <Button style={{ color: '#ffffff', textDecoration: "none" }} >
                        <Link style={{ color: '#ffffff', textDecoration: "none"}} to="/Login">Login</Link>
                    </Button>
                    <Button style={{ color: '#ffffff', textDecoration: "none" }} onClick={handleClick}> Signup </Button>
                    <Menu style={{ paddingTop: '0 px', paddingBottom: '0 px' }}
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} style={{ backgroundColor: "rgb(51, 95, 0)" }}><Link style={{ color: '#ffffff', textDecoration: "none" }} to="/AdminSignup">Admin</Link></MenuItem>
                        <MenuItem onClick={handleClose} style={{ backgroundColor: "rgb(51, 95, 0)" }}><Link style={{ color: '#ffffff', textDecoration: "none" }} to="/StudentSignup">Student</Link></MenuItem>
                        <MenuItem onClick={handleClose} style={{ backgroundColor: "rgb(51, 95, 0)" }}><Link style={{ color: '#ffffff', textDecoration: "none" }} to="/CompanySignup">Company</Link></MenuItem>
                    </Menu>
                </Typography>
            </Toolbar >
        </AppBar >
    )

}
export default CustomNavbar;

