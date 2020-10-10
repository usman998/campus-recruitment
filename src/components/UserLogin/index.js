import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { db, auth } from "../../config/firebase";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Userlogin(props) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const classes = useStyles();


    let getLogin = async (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(async (user) => {
                console.log('success!', user);
                // console.log('success!', props);
                // var userId = user.user.uid;
                var userEmail = user.user.email
                // var userId = firebase.auth().currentUser.uid;
                var flag = false
                await db.ref('/Students/' + auth.currentUser.uid).once('value').then(function (snapshot) {
                    console.log('Student', snapshot)
                    if (snapshot.val() !== null) {
                        var {
                            firstName,
                            lastName,
                            email,
                            userId
                        } = snapshot.val()
                        console.log("****", firstName)
                        flag = true
                        props.history.push('/DashboardStudent')
                        return flag
                    }
                    else {
                        // if (!flag) {
                        db.ref('/Company/' + auth.currentUser.uid).once('value').then(function (snapshot) {
                            // console.log(snapshot.val())
                            if (snapshot.val() !== null) {
                                var {
                                    companyName,
                                    email,
                                    userId
                                } = snapshot.val()
                                console.log("****", companyName)
                                flag = true
                                props.history.push('/DashboardCompany')
                                return flag
                            }
                            else {
                                // console.log("Admin")
                                db.ref('/Admin/' + auth.currentUser.uid).once('value').then(function (snapshot) {
                                    // console.log(snapshot)
                                    if (snapshot.val() !== null) {
                                        var {
                                            firstName,
                                            lastName,
                                            email,
                                            userId
                                        } = snapshot.val()
                                        console.log("****", firstName)
                                        flag = true
                                        props.history.push('/DashboardAdmin')
                                        return flag
                                    }
                                });
                            }
                        });
                    }
                });
            })
            .catch(error => {
                console.error('error ', error);
            });
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign-In
           </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}

                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ backgroundColor: '#335f00' }}
                        className={classes.submit}
                        onClick={(e) => getLogin(e)}
                    >
                        Sign In
             </Button>
                </form>
            </div>
        </Container>
    );
}


export default Userlogin;

