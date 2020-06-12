import React from 'react';
import {Grid} from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    square: {
      border: '4px solid black',
    }, 
    orangeRectangle:{
        backgroundColor:'#ffc071',
        width:'100%',
        height:'250px',
    },
    greyMatter:{
        backgroundColor:'#EAEDED',
        width:'100%',
        height:'250px'
    }
  }));
function Contact(){
    const classes = useStyles();
    return(
        <div className="backTest">
        <Grid container justify='center'  alignItems="center" style={{paddingTop:50,paddingBottom:150,textAlign:'center'}}>
            <Grid item sm={12}>
                <Button className={classes.square}>
                    <Typography classname="text" variant="h5" >GOT SOME INTERROGATIONS?</Typography>
                </Button>
            </Grid>
            <Grid item sm={6} style={{paddingLeft:50, paddingTop:50}}>
                    <div className={classes.orangeRectangle}>
                        <Typography style={{paddingTop:10,color:'white',fontWeight:'bold'}}>Email: louisnotteghem92@gmail.com</Typography>
                        <br />
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/louis.not/" class="link">
                                <InstagramIcon fontSize="large"/> <Typography>@Louis.not I give away money every 100 followers</Typography>
                        </a>
                        <br />
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/louis-notteghem-5203851a0/" class="link"> 
                            <LinkedInIcon fontSize="large"/> <Typography>Louis Notteghem</Typography>
                        </a>          
                    </div>
            </Grid>
                <Grid item sm={6} style={{paddingRight:50, paddingTop:50}}>
                    <div className={classes.greyMatter}>
                    <h3 style={{paddingTop:15}}>ALWAYS LOOKING FOR ADVENTURES</h3>
                    <Typography style={{paddingTop:35}}>If you need someone to  travel the world</Typography>
                    <br />
                    <Typography>To work on a project</Typography>
                    <br />
                    <Typography>I would be glad to join you</Typography>
                    </div>
                </Grid>
        </Grid>
        </div>
    )
}export default Contact