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

export default function StudentProfile() {
    // let [firstName, setFirstName] = useState('');
    // let [lastName, setLastName] = useState("")
    // let [email, setEmail] = useState('');
    // let [degree, setDegree] = useState('')
    // let [gpa, setGpa] = useState('')
    let [stdData, setstdData] = useState({})
    let [cvData, setCvdata] = useState([])
    const classes = useStyles();

    useEffect(() => {
        let promise = new Promise(function (resolve, reject) {
            db.ref('Cv').on('value', function (snapshot) {
                if (snapshot.val()) {
                    resolve(snapshot.val())
                }
                else {
                    reject("error")
                }
            })
        })

        promise.then(function (data) {
            console.log('data mila', data)
            var arr = []
            for (var key in data) {
                arr.push(data[key])
            }
            setCvdata(arr)
            setstdData = (data)
            console.log("...literals", { ...data })
        })
            .catch(function (error) {
                console.log(error)
            })
    }, [])


    // const stddata = props.stddata
    return (
        <ul>
            {cvData.map((data, index) => {
                console.log(cvData)
                return (
                    <div key={index} style={{ justifyContent: 'center', textAlign: 'center' }}>
                        <Card className={classes.root} style={{ display: 'flex', justifyContent: 'center' }}>
                            <CardActionArea style={{ padding: '15px', margin: '40px 150px', boxShadow: '0px 0px 5px 0px grey', borderRadius: '15px' }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="h2">
                                        <div>
                                            <Typography gutterBottom variant="h6" component="h2">
                                                <div>
                                                    <h4 style={{ textDecorationLine: 'underline' }}> {`Student Profile`} </h4>
                                                    {`First Name :  ${data.firstName}`}
                                                    <br />
                                                    {`Last Name :  ${data.lastName}`}
                                                    <br />
                                                    {`Email      :  ${data.email}`}
                                                    <br />
                                                    {`Degree      :  ${data.degree}`}
                                                    <br />
                                                    {`GPA    :  ${data.gpa}`}
                                                </div>
                                            </Typography>
                                        </div>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                )
            }
            )}
        </ul>
    );
}