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

export default function Jobprofile() {
    // let [firstName, setFirstName] = useState('');
    // let [lastName, setLastName] = useState("")
    // let [email, setEmail] = useState('');
    // let [degree, setDegree] = useState('')
    // let [gpa, setGpa] = useState('')
    let [stdData, setstdData] = useState({})
    let [jData, setjData] = useState([])
    const classes = useStyles();

    useEffect(() => {
        var arr = [];
        var arr2 = [];
        var userId = auth.currentUser.uid;
        console.log(userId)
        // db.ref().child('Job').child(uid)
        db.ref(`/Job/${userId}`).on('value', function (snapshot) {
            // console.log('snap', snapshot.val())
            if (snapshot.val()) {
                console.log(snapshot.val())
                for (var key in snapshot.val()) {
                    arr.push(snapshot.val()[key])
                }
                // for (var key in arr[0]) {
                //     arr2.push(arr[0][key])
                // }
                // console.log(arr2)
                setjData(arr)
            }
            else {
                console.log("error")
            }
        })


        // promise.then(function (data) {
        //     // console.log('data mila', data)
        //     var arr = []
        //     var myarr = []
        //     for (var key in data) {
        //         arr.push(data[key])
        //     }
        //     for (var arr in data) {
        //         myarr.push(data[arr])
        //     }
        //     console.log(myarr)
        //     // setjdata(arr)
        //     // setjdata = (data)
        //     // console.log("...literals", { ...data })
        // })
        //     .catch(function (error) {
        //         console.log(error)
        //     })
    }, [])


    // const stddata = props.stddata
    return (
        <ul>
            {jData.map((data, index) => {
                console.log(jData)
                return (
                    <div key={index} style={{ justifyContent: 'center', textAlign: 'center' }}>
                        <Card className={classes.root} style={{ display: 'flex', justifyContent: 'center' }}>
                            <CardActionArea style={{ padding: '15px', margin: '40px 150px', boxShadow: '0px 0px 5px 0px grey', borderRadius: '15px' }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="h2">
                                        <div>
                                            <h4 style={{ textDecorationLine: 'underline' }}> {`Job Profile`} </h4>
                                            {`Company Name :  ${data.companyName}`}
                                            <br />
                                            {`Job Title :  ${data.jobTitle}`}
                                            <br />
                                            {`Email      :  ${data.email}`}
                                            <br />
                                            {`Contact  No     :  ${data.contactNo}`}
                                            <br />
                                            {`HR Person    :  ${data.hrperson}`}
                                            <br />
                                            {`Timing  :  ${data.timeing}`}
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