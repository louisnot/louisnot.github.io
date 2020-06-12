import React from 'react';
import Container from  '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Icon} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    explore:{

    },
}))

function myMove(){
    var rect = document.getElementById("divIcon")
    var pos = 0;
    var posEnd = 25;
    var timer = setInterval(movie, 15);
    var bord = false;
    function movie(){
        if(!bord){
            pos++
            rect.style.top = pos +"px";
            if(pos>25){
                bord = true;
                posEnd=25;
            }
        }
        if(bord){
            posEnd--
            rect.style.top=posEnd + "px";
            if(posEnd===0){
                bord = false;
                pos = 0;
            }
        }
    }
    
}

function Banner(){
    const classes = useStyles();
        return(
            <Box onClick={()=>myMove()} className="Herobanner">
                <Container className="heroLayout">
                    <Grid direction="column" spacing={5}>
                    <h1>GREETING FELLA</h1>
                    <div id="divIcon">
                        <Icon className="buttonIcon"> <ArrowDownwardIcon className={classes.explore} /></Icon>
                    </div>
                    </Grid>
                </Container>
            </Box>
        )
} export default Banner;
