import React from 'react';
import { Grid, } from '@material-ui/core/';
import Shake from 'react-reveal/Shake';


function Plan() {
  return (
  <Grid container justify="center" alignItems="center" style={{paddingBottom:150,backgroundColor:'#EAEDED',textAlign:'center'}}>
    <Grid item sm={12}><h1 style={{paddingTop:100,paddingBottom:100}}>My plan for futur</h1></Grid>
    <Grid item sm={4}>
      <Shake>
    <img src={require('../img/coin.svg')} alt="money icon" style={{height:50,width:50}} />
      <h3 style={{paddingBottom:30,paddingTop:30}}>Millionaire by 2023</h3>
      <p style={{padding:10}}>I want to hit a million euros on my bank account, also I promess to give every millions to people I've met through my journey. This first million has already been split between 10 people</p>
      </Shake>
    </Grid>
    <Grid item sm={4}>
      <Shake>
    <img src={require('../img/king.svg')} alt="king icon" style={{height:50,width:50}} />
      <h3 style={{paddingBottom:30,paddingTop:30}}>King of France</h3>
      <p style={{padding:10}}>Let's be honest wouldn't <strong>Louis XXI</strong> be badass?</p>
      </Shake>
    </Grid>
    <Grid item sm={4}>
    <Shake>
    <img src={require('../img/rocket.svg')} alt="rocket icon" style={{height:50,width:50}} />
      <h3 style={{paddingBottom:30,paddingTop:30}}>Visit Space</h3>
      <p style={{padding:10}}>I've always been passionate about the universe and the world we are living in. I believe there is life in other places and I want to leave Earth before I die at least once!</p>
    </Shake>
    </Grid>
  </Grid>
  )

}

export default Plan;
