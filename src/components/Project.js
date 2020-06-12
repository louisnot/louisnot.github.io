import React from 'react';
import  Oot from '../img/outoften.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppleIcon from '@material-ui/icons/Apple';
import ShopIcon from '@material-ui/icons/Shop';

const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        justifyContent:'center',
        paddingBottom:20
    },
    leftpanel:{
        display:'flex',
        flexDirection:'column',
        padding:30,
    },
    rightpanel:{
        display:'flex',
        justifyContent:'center',
    },
    title:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'space-around',
        overflow:'hidden',
        padding:30,
    },
    description:{
        alignItems:'center'
    },
    icon:{
        width:"20%",
        textAlign:'center',
        fontSize:'28px',
        marginRight:'8px',
    }
}));

function Project(){
    const classes = useStyles()
    return(
        <div>
            <div className={classes.title}>
            <h1>STUFF CREATED <span className="dash"/></h1>
    </div>
            <Grid container className={classes.root}>
                <Grid className={classes.leftpanel} item sm={6}>
                    <h3 style={{paddingBottom:40}}>OUT OF TEN </h3>
                    <div className={classes.description}>
                        <h5 style={{padding:15}}>-APP CREATED WITH REACT NATIVE</h5>
                        <h5 style={{padding:15}}>-NODE.JS</h5>
                        <h5 style={{padding:15}}>-MONGO DB</h5>
                        <h6 style={{padding:15}}>-RATE PHOTO OF OTHER USERS BEFORE POSTING ON SOCIAL MEDIA </h6>
                    </div>
                    <div className="flexy">
                        <a className="appli blu" target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/fr/app/teachr/id1492646470">
                            <AppleIcon className={classes.icon} />
                            <p>Available on the <span className="bigText">app store</span></p>
                        </a>
                        <a className="appli blu" target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.zerototen">
                            <ShopIcon className={classes.icon}/>
                            <p>Available on the <span className="bigText">Google Play</span></p>
                        </a>
                    </div>
                </Grid>
                <Grid className={classes.rightpanel} item sm={6}>
                      <img alt="outoften" style={{width:380,height:380}} src={Oot} />
                </Grid>
            </Grid>
        </div>
    )
} export default Project;