import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import firebase, { database } from 'firebase';
import { db, auth } from '../../../config/firebase';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import CustomNavbar from '../../../component-common/Navbar';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

function AdminSignup(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let adminRegistered = (e) => {
        e.preventDefault();
        console.log('zain')
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log('success!', user);
                console.log('success!', props);
                var userId = user.user.uid;
                var userEmail = user.user.email
                db.ref('Admin/' + userId).set({
                    userId,
                    firstName,
                    lastName,
                    email: userEmail,
                    password
                });
                const admindata = {
                    userId,
                    firstName,
                    lastName,
                    email: userEmail,
                    password


                }
                //setting local Storage 
                localStorage.setItem('AdminSign', admindata)
                console.log(admindata)
                props.history.push('/Login')
            })
            .catch(error => {
                console.error('error ', error);
            });
    }
    const classes = useStyles();
    return (
        <div>
            {/* <CustomNavbar /> */}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Admin Sign up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{ backgroundColor: '#335f00' }}
                            className={classes.submit}
                            onClick={(e) => adminRegistered(e)}
                        >
                            Sign Up
                       </Button>
                        <Grid container style={{ display: 'flex', justifyContent: "center" }}>
                            <Grid item>
                                <Link variant="body2" to='/Login'>
                                    Already have an account? Sign in
                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>

    );
}


export default AdminSignup;