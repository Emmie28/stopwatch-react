
import * as React from 'react';
import './App.css';
import { Button, Grid, Paper} from '@material-ui/core';
import {  makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  screen:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    background: 'rgba(0, 0, 0, 0.6)',
  },
  grid: {
    width: '25%',
    margin: '0%',
    border: '1px solid black',
    background: 'rgba(0, 0, 0, 0.87)',
    color: 'white',
  },
  span:{
    color: 'red',
  },
})); 



function App() {
  
  const classes = useStyles();
  const [time, setTime] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);

  const handleStart = () =>{
    setIsActive(true);
  }

  const handleStop = () =>{
    setIsActive(false);
  }

  const handleRestart = () =>{
    setTime(0);
    setIsActive(true);
  }

  React.useEffect( () =>{
    let intr = null;
    if(isActive)   
      intr = setInterval(() => setTime((time) => time + 10), 10);
    else
      clearInterval(intr);
    return () => {
      clearInterval(intr);
      };
}, [isActive]
  
);

  return (
    <div className="App">
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={12}>
          <Paper className={classes.screen}>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} : 
            <span> {("0" + Math.floor((time / 1000) % 60)).slice(-2)} : </span> 
            <span className={classes.span}> {("0" + Math.floor((time / 10) % 100)).slice(-2)}</span></Paper>
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.grid} onClick={handleStart}>Start</Button>
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.grid} onClick={handleStop}>Stop</Button>
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.grid} onClick={handleRestart}>Restart</Button>
        </Grid>
        
      </Grid>
  
    </div>
  );
}


export default App;
