import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: '#FEF1F5',
      height:'150px',
      width:'100%',
      display:'flex',
      paddingLeft:'10px',
      paddingBottom:'10px',
      flexDirection:'column-reverse'
    },
    credit:{
        fontSize:'10px'
    }
  }));


function Footer(){
    const classes = useStyles();
    return(
        <div className={classes.footer}>
            <Typography className={classes.credit}>Thanks to <a style={{color:'black'}} href="https://material-ui.com/"> Material UI </a></Typography>
            <Typography className={classes.credit}>Icons used <a style={{color:'black'}} href="http://www.onlinewebfonts.com/icon"> onlinewebfonts</a></Typography>
            <br />
            <Typography className={classes.credit}>Made by Louis Notteghem for Louis Notteghem, June 2020</Typography>

        </div>
    )
}export default Footer;