import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
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

export default function Companydeatil() {
    let [jobData, setjobData] = useState({})
    let [getData, setgetData] = useState([])
    const classes = useStyles();

    useEffect(() => {
        var arr = [];
        var arr2 = [];
        db.ref('Company').on('value', (snapshot) => {
            const data = snapshot.val()
            console.log(data)
            if (data) {
                arr = Object.values(data)
                setgetData(arr)
            }
            else {
                console.log('error')
                setgetData([])
            }
        })
        // let promise = new Promise(function (resolve, reject) {
        //         .then(function (data) {
        //     console.log(data)
        //     for (var key in data) {
        //         arr.push(data[key])
        //     }
        //     // arr = Object.values(snapshot)
        //     setgetData(arr)

        // })
        //     .catch(function (error) {
        //         console.log(error)
        //     })
    }, [])

    let dataDelete = (e, uid) => {
        console.log('delete run', e)
        // db.ref('Student', +e)
        const userDb = db.ref().child('Company').child(uid).remove()
        // const userAuth = auth.deleteUser(uid)
        const job = db.ref().child('Job').child(uid).remove()

        Promise.all([userDb, job]).then((r) => {
            console.log(r);
        })
            .catch((error) => {
                console.log('error', error);
            })

    }
    return (
        <>
            {getData.map((data, index) => {
                // console.log(data)
                return (
                    <div key={index} style={{ justifyContent: 'center', textAlign: 'center' }}>
                        <Card className={classes.root} style={{ display: 'flex', justifyContent: 'center' }}>
                            <CardActionArea style={{ padding: '15px', margin: '40px 150px', boxShadow: '0px 0px 5px 0px grey', borderRadius: '15px' }}>
                                <CardContent >
                                    <div  >
                                        <h4 style={{ textDecorationLine: 'underline' }}> {`Company Detail`} </h4>
                                        {`First Name :  ${data.companyName}`}
                                        <br />
                                        {`Email       :  ${data.email}`}


                                    </div>
                                    <br />
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        startIcon={<DeleteIcon />}
                                        onClick={(e) => dataDelete(e, data.userId)}
                                        style={{ color: '#fff', background: '#335f00' }}
                                    > Delete</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                )
            }
            )}
        </>
    );
}