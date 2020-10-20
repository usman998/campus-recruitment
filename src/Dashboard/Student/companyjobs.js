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

export default function CompanyJobs() {
    let [jobData, setjobData] = useState({})
    let [jData, setjData] = useState([])
    const classes = useStyles();

    useEffect(() => {
        console.log('run')
        var arr = [];
        var arr2 = [];
        db.ref('Job').on('value', function (snapshot) {
            if (snapshot.val()) {
                console.log(snapshot.val(),'======')
                for (var key in snapshot.val()) {
                    console.log(snapshot.val()[key],"===first child")
                    for (var key1 in snapshot.val()[key]) {
                        arr2.push(snapshot.val()[key][key1])
                    }
                }
                console.log(arr2)
                setjData(arr2)
            }
            else {
                console.log('error')
            }
        })

        // let promise = new Promise(function (resolve, reject) {
        //     db.ref('Job').on('value', function (snapshot) {
        //         if (snapshot.val()) {
        //             resolve(snapshot.val())
        //         }
        //         else {
        //             reject("error")
        //         }
        //     })
        // })

        // promise.then(function (data) {
        //     // console.log('data mila', data)
        //     var arr = []
        //     for (var key in data) {
        //         arr.push(data[key])
        //     }
        //     console.log(arr)
        //     // console.log(...arr)
        //     setjData(arr)
        //     setjobData = (data)
        //     // console.log("...literals", { ...data })
        // })
        //     .catch(function (error) {
        //         console.log(error)
        //     })
    }, [])

    return (
        <>

            <ul>
                {jData.map((data, index) => {
                    console.log(data)
                    return (
                        <div key={index} style={{ textAlign: 'center', justifyContent: 'center' }}>
                            <Card className={classes.root} style={{ display: 'flex', justifyContent: 'center' }}>
                                <CardActionArea style={{ padding: '15px', margin: '40px 150px', boxShadow: '0px 0px 5px 0px grey', borderRadius: '15px' }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            <div>
                                                <h4 style={{ textDecorationLine: 'underline' }}>{'Company Jobs'}</h4>
                                                {`Comapny Name : ${data.companyName}`}
                                                <br />
                                                {` Job Title  : ${data.jobTitle}`}
                                                <br />
                                                {` Email : ${data.email}`}
                                                <br />
                                                {` HR  : ${data.hrperson}`}
                                                <br />
                                                {`   Contact  : ${data.contactNo}`}
                                                <br />
                                                {`  Timeing    : ${data.timeing}`}
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
        </>

    );
}