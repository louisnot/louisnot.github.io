import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Pizza from '../img/NYPizza.jpg';
import Chicago from '../img/OWchi.png';
import Yellow from '../img/yellow.png';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


const mytext1 = "1- I've been collecting and reselling sneakers for 4-5 years now I started with only 1 or 2 pairs now I have dozens every months and my colletion keep growing. I worked on some scripts to buy the pairs more easily or to sign up for draw automatically."
const myText2 = "2- I love Pizza, it has to be one of my favorite meal and I try every week to make the best home made pizza. Who knows, I might open a Pizzeria in 5 years?"
const mytext3 = "3- Finally, I spend a lot of time on video games, mainly on online ones. I always play and aim to win the hardest content of each game even though I do not want to become a professional player."
const tileData = [{
  img:Chicago,
  title:'Sneakers',
},
{
  img:Pizza,
  title:'Pizza',
},
{
  img:Yellow,
  title:'Video Games',
}
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'space-around',
    overflow:'hidden',
    padding:30,
  },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  button:{
    marginTop:'15px',
    border:'1px solid black'
  }
  }));



function Passion() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const classes = useStyles();
  return (
    <div className={classes.root}>
        <h1 style={{paddingBottom:20}}>Some other stuff I like <span className="dash"/></h1>
    <Paper elevation={12}>
    <GridList className={classes.gridList} cols={2.5}>
    {tileData.map((tile) => (
              <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title}/>
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                  >
                  {tile.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </GridListTile>
         ))}
         </GridList>
      </Paper>
      <Button className={classes.button}onClick={handleClickOpen('paper')}> Learn more</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        onBackdropClick={handleClose}
      >
        <DialogTitle id="Learn more about what I do">What I do</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <Typography>{mytext1}</Typography>
          <Typography>{myText2}</Typography>
          <Typography>{mytext3}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">Close</Button>
            </DialogActions>
      </Dialog>
    </div>
  );
    }
export default Passion;

/*
 <ButtonBase
            focusRipple
            key={tile.img}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            >

    </ButtonBase>
*/