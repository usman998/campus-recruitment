import React, { useState, useEffect } from 'react';
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

export default function StudentHome() {
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState("")
    let [email, setEmail] = useState('');
    let [degree, setDegree] = useState('')
    let [gpa, setGpa] = useState('')
    let [cvdata, setCVData] = useState({})
    const classes = useStyles();


    useEffect(() => {
        // console.log("zain")
        // e.preventDefault();
        var userId = auth.currentUser.uid;
        console.log(userId)
        db.ref('/Students/' + userId).once('value').then(function (snapshot) {
            let data = snapshot.val()
            // console.log(data)
            setCVData(data)
        })
            .catch(error => {
                console.log("error", error)
            })
    }, []);


    return (
        < div style={{ textAlign: 'center', justifyContent: 'center' }}>
            <Card className={classes.root} style={{ display: 'flex', justifyContent: 'center' }}>
                <CardActionArea style={{ padding: '15px', margin: '40px 150px', boxShadow: '0px 0px 5px 0px grey', borderRadius: '15px' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            <div>
                                <h4 style={{ textDecorationLine: 'underline' }}> {`Profile`} </h4>
                                {`First Name :  ${cvdata?.firstName}`}
                                <br />
                                {`Last Name :  ${cvdata?.lastName}`}
                                <br />
                                {`Email      :  ${cvdata?.email}`}
                            </div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div >
    );
}