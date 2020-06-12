import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade';

function About() {
  return (
  <Box className="box">
  <Grid container style={{paddingTop:100,paddingBottom:200, alignItems:'center'}}>
      <Grid style={{display:'flex',justifyContent:'center'}}item sm={6}>
      <Fade left>
      <Tooltip arrow title="Photo taken with Android phone, looking great right?" placement="left">
          <img style={{width:200,height:400}}src={require('../img/me.png')} alt={'avatar of me'}/>
         </Tooltip>
         </Fade>
      </Grid>
      <Grid item style={{paddingRight:25}} sm={6}>
      <Paper style={{padding:20}}>
          <h2 style={{paddingBottom:10}}> Wanna know more about me?</h2>
          <p>My name is Louis Notteghem, I'm 22 years old studying computer science at Institut Superieure d'Electonique de Paris and I have no idea what I want to do in my life.</p>
          <p>I started to code in October 2018 with Java, then in April 2019 I started to learn JS for NodeJS and React Native. I love  to learn new thing.</p>
          <br />
          <Typography> All I want is to enjoy every minutes of my life</Typography>         
          <br />
          <p>Oh, One thing I know, I'm looking for an internship!</p>
          </Paper>
      </Grid>
  </Grid>
  </Box>
  )

}

export default About;