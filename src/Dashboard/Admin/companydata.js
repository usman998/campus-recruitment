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

export default function Companydata() {
    let [jobData, setjobData] = useState({})
    let [jData, setjData] = useState([])
    const classes = useStyles();

    useEffect(() => {
        var arr = [];
        var arr2 = [];
        db.ref('Job').on('value', function (snapshot) {
            if (snapshot.val()) {
                console.log(snapshot.val())
                for (var key in snapshot.val()) {
                    arr.push(snapshot.val()[key])
                }
                for (var key in arr[0]) {
                    arr2.push(arr[0][key])
                }
                console.log(arr2)
                setjData(arr2)
            }
            else {
                console.log('error')
                setjData([])
            }
        })


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
            <ul>
                {jData.map((data, index) => {
                    console.log(data)
                    return (
                        <div key={index} style={{ justifyContent: 'center', textAlign: 'center' }}>
                            <Card className={classes.root} style={{ display: 'flex', justifyContent: 'center' }}>
                                <CardActionArea style={{ padding: '15px', margin: '40px 150px', boxShadow: '0px 0px 5px 0px grey', borderRadius: '15px' }}>
                                    <CardContent >
                                        <div  >
                                            <h4 style={{ textDecorationLine: 'underline' }}> {`Company Jobs`} </h4>
                                            {`First Name :  ${data.companyName}`}
                                            <br />
                                            {`Last Name :  ${data.jobTitle}`}
                                            <br />
                                            {`Email      :  ${data.email}`}
                                            <br />
                                            {`Hr      :  ${data.hrperson}`}
                                            <br />
                                            {`Contact     :  ${data.contact}`}
                                            <br />
                                            {`Timeings     :  ${data.timeing}`}

                                        </div>
                                        <br />
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            startIcon={<DeleteIcon />}
                                            style={{ color: '#fff', background: '#335f00' }}
                                            onClick={(e) => dataDelete(e, data.userId)}
                                        > Delete</Button>
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