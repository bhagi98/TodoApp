import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pic from "./todo.png";
import { Grid, Paper } from '@material-ui/core';

export default function ImgMediaCard() {
    return (

        <Paper style={{ padding: 150, height: '100% ', backgroundColor: "#eadff5" }}>
            <Grid
                container
                spacing={3}
                direction={'column'}
                justify={'center'}
                alignItems={'center'}
            >
                <Card justify={'center'}
                    alignItems={'center'} sx={{ maxWidth: 500 }}>
                    <img alt='img' src={pic} height="300" width="500" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Todo App
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            To continue Please Login or Register to the System
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" href='/login' color="secondary">Login</Button>
                        <Button variant="contained" href='/register' color="secondary">Register</Button>

                    </CardActions>
                </Card>
            </Grid>
        </Paper>
    );
}
