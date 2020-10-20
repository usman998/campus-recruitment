import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
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
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 12,
    }
});

export default function CreateJob() {
    let [companyName, setCompanyName] = useState('');
    let [jobTitle, setJobTitle] = useState('');
    let [email, setEmail] = useState('');
    let [contactNo, setContactNo] = useState("")
    let [timeing, setTimeing] = useState('')
    let [hrperson, setHrPerson] = useState('')

    const classes = useStyles();

    let onSubmit = (e) => {
        e.preventDefault();
        // console.log('zain')
        var userId = auth.currentUser.uid;
        console.log(userId)
        db.ref('/Job/' + userId).push({
            userId,
            companyName,
            jobTitle,
            email,
            contactNo,
            timeing,
            hrperson
        })
    }

    // const bull = <span className={classes.bullet}></span>;
    return (
        <div style={{ justifyContent: 'center', textAlign: 'center' }} >
            <Card className={classes.root} style={{ display: 'flex', justifyContent: 'center' }}>
                <CardActionArea style={{ padding: '15px', margin: '40px 150px', boxShadow: '0px 0px 5px 0px grey', borderRadius: '15px' }}>
                    <CardContent>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <div className={classes.paper}>

                                <Typography component="h1" variant="h5">
                                    Create Jobs
                            </Typography>
                                <form className={classes.form} noValidate>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        id="companyName"
                                        label="Company Name"
                                        name="Company name"
                                        onChange={(e) => setCompanyName(e.target.value)}
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        // fullWidth
                                        id="jobTitle"
                                        label="Job Title"
                                        name="Job Title"
                                        // autoComplete="current-password"                 
                                        onChange={(e) => setJobTitle(e.target.value)}
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        id="email"
                                        label="Email Address"
                                        name="Email"
                                        // autoComplete="email"
                                        // autoFocus
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        // fullWidth
                                        id="contactNo"
                                        label="Contact No"
                                        name="contactNo"
                                        // autoComplete="current-password"                 
                                        onChange={(e) => setContactNo(e.target.value)}
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        // fullWidth
                                        id="timeing"
                                        label="Timeing"
                                        name="Timeing"
                                        // autoComplete="current-password"                 
                                        onChange={(e) => setTimeing(e.target.value)}
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        // fullWidth
                                        id="hrperson"
                                        label="Hr Person"
                                        name="Hr Person"
                                        // autoComplete="current-password"                 
                                        onChange={(e) => setHrPerson(e.target.value)}
                                    />
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
            </Card >
        </div>

    );
}