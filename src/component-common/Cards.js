import React from 'react';
import { CardContent, Typography, Card, Button, CardActions } from '@material-ui/core';

function CustomCard(props) {
    return (
        <Card>
            <CardContent>
                <Typography
                    // className={classes.title}
                    color="textSecondary" gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                  <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </Card>
    );
}
export default CustomCard;