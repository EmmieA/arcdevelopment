/* eslint-disable no-unused-vars */
import React from 'react';
import Lottie from 'react-lottie';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';

import animationData from '../animations/landinganimation/data';
import ButtonArrow from './ui/Resources/ButtonArrow';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    // we want to ensure that the text never gets too small to create badly stacked
    // buttons because one of them has right margin applied so they won't stack up
    // evenly on top of each other
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  handAnimation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: '45px',
    width: '145px',
    marginRight: '40px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButton: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderRadius: 50,
    borderWidth: 2,
    textTransform: 'none',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();

  const defaultAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRation: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          {/* Adding "sm" is how to specify "once the screen size hits small (or less), this should occupy its own row" */}
          <Grid item sm className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast technology
              <br />
              to the Midwest
            </Typography>
            <Grid container justify="center" className={classes.buttonContainer}>
              <Grid item>
                <Button variant="contained" className={classes.estimateButton}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButton}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.handAnimation}>
            <Lottie options={defaultAnimationOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
