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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 12,
    },
    // card- sty: {
    //     padding: '15px',
    //     margin: '50px 150px',
    //     box - shadow: '0px 0px 5px 0px grey',

    //      border - radius: '5px'
    // border- radius: 5px;
    /* border: 1px solid red; */
    /* margin: 50px 100px; */
    /* border: 2px solid lightgray; */
    // }


    // table: {
    //     minWidth: 650,
    // },
});

export default function Studentdeatils() {
    let [getData, setgetData] = useState({})
    let [stdData, setStdData] = useState([])
    let [dltData, setdltData] = useState('')
    const classes = useStyles();

    useEffect(() => {
        var arr = [];
        var arr2 = [];
        db.ref('Students').on('value', (snapshot) => {
            // console.log(snapshot)
            const data = snapshot.val();
            console.log(data)
            if (data) {
                // for (var key in data) {
                //     arr.push(data[key])
                // }
                arr = Object.values(data)
                setStdData(arr)
            }
            else {
                console.log('error')
                setStdData([])
            }
        })
        // .then(function (data) {
        //     console.log('data', data)
        // })
        // .catch(function (error) {
        //     console.log('error', error);
        // })
        // let promise = new Promise(function (resolve, reject) {
        // })
        //    
    }, [])

    let dataDelete = (e, uid) => {
        console.log('delete run', e)
        // db.ref('Student', +e)
        const userDb = db.ref().child('Students').child(uid).remove()
        // const userAuth = auth.deleteUser(uid)
        const cv = db.ref().child('Cv').child(uid).remove()

        Promise.all([userDb, cv]).then((r) => {
            console.log(r);
        })
            .catch((error) => {
                console.log('error', error);
            })

    }

    return (
        <>
            {stdData.map((data, index) => {
                // console.log(stdData)
                return (
                    <div key={index} style={{ justifyContent: 'center', textAlign: 'center' }}>
                        <Card className={classes.root} style={{ display: 'flex', justifyContent: 'center' }}>
                            <CardActionArea style={{ padding: '15px', margin: '40px 150px', boxShadow: '0px 0px 5px 0px grey', borderRadius: '15px' }}>
                                <CardContent >
                                    <div  >
                                        <h4 style={{ textDecorationLine: 'underline' }}> {`Student Detail`} </h4>
                                        {`First Name :  ${data.firstName}`}
                                        <br />
                                        {`Last Name :  ${data.lastName}`}
                                        <br />
                                        {`Email :  ${data.email}`}
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