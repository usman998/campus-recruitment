import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { db, auth } from "../../config/firebase";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const useStyles = makeStyles({
    // bullet: {
    //     display: 'inline-block',
    //     margin: '0 2px',
    //     transform: 'scale(0.8)',
    // },
    // pos: {
    //     marginBottom: 12,
    // }
});

export default function Cv() {
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState("")
    let [email, setEmail] = useState('');
    let [degree, setDegree] = useState('')
    let [gpa, setGpa] = useState('')
    // console.log(firstName)
    const classes = useStyles();

    let onSubmit = (e) => {
        e.preventDefault();
        // console.log('zain')
        var userId = auth.currentUser.uid;
        console.log(userId)
        db.ref('/Cv/' + userId).set({
            userId,
            firstName,
            lastName,
            email,
            degree,
            gpa,
        })

    }

    // const bull = <span className={classes.bullet}></span>;
    return (
        <div style={{ textAlign: 'center', justifyContent: 'center' }} >
            <Card className={classes.root} style={{ display: 'flex', justifyContent: 'center' }}>
                <CardActionArea style={{ padding: '15px', margin: '40px 150px', boxShadow: '0px 0px 5px 0px grey', borderRadius: '15px' }}>
                    <CardContent>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <div className={classes.paper}>
                                <Typography component="h1" variant="h5">
                                    Create Cv
                            </Typography>
                                <form className={classes.form} noValidate style={{ textDecoration: 'none' }}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        // fullWidth
                                        id="firstname"
                                        label="First Name"
                                        name="First name"
                                        // autoComplete="email"
                                        // autoFocus
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        // fullWidth
                                        id="lastname"
                                        label="Last Name"
                                        name="Last Name"
                                        id="password"
                                        // autoComplete="current-password"                 
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
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
                                        // fullWidth
                                        id="degree"
                                        label="Degree"
                                        name="Degree"
                                        id="degree"
                                        // autoComplete="current-password"                 
                                        onChange={(e) => setDegree(e.target.value)}
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        // fullWidth
                                        id="gpa"
                                        label="GPA"
                                        name="GPA"
                                        // autoComplete="current-password"                 
                                        onChange={(e) => setGpa(e.target.value)}
                                    />
                                    {/* <TextField
                                    id="outlined-multiline-static"
                                    label="Description"
                                    multiline
                                    rows={3}
                                    defaultValue="Default Value"
                                    variant="outlined"
                                /> */}
                                    <Button
                                        type="submit"
                                        // fullWidth
                                        variant="contained"
                                        color="primary"
                                        style={{ backgroundColor: '#335f00', width: '55%' }}
                                        className={classes.submit}
                                        onClick={(e) => onSubmit(e)}
                                    >Create Cv</Button>
                                </form>
                            </div>
                        </Container>
                    </CardContent>
                </CardActionArea>
                {/* <CardActions style={{ textAlign: "center" }}>
                    <Button size="small" style={{ color: 'red', textAlign: "center" }}>Submit</Button>
                </CardActions> */}
            </Card >
        </div>

    );
}