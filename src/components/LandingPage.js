/* eslint-disable no-unused-vars */
import React from 'react';
import Lottie from 'react-lottie';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Button, Typography, Card, CardContent } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';

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
  servicesContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      marginTop: '4em',
      padding: 25,
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
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  learnButtonSecondary: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subTitle: {
    marginBottom: '1em',
  },
  softwareIcon: {
    marginLeft: '2em',
    // handle stacking when screen is sized down
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  mobileAppsIcon: {
    marginRight: '3em',
    [theme.breakpoints.down('xs')]: {
      marginRight: '1em',
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddinBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%',
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const viewportIsSmallOrBelow = useMediaQuery(theme.breakpoints.down('sm'));

  const defaultAnimationOptions = {
    loop: true,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRation: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/* ----- HERO BLOCK ----- */}
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
                <Button variant="outlined" className={classes.learnButtonHero}>
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

      {/* ----- CUSTOM SOFTWARE BLOCK ----- */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={viewportIsSmallOrBelow ? 'center' : undefined}
          className={classes.servicesContainer}
        >
          <Grid
            item
            style={{
              marginLeft: viewportIsSmallOrBelow ? '1em' : '5em',
              textAlign: viewportIsSmallOrBelow ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              Save energy. Save time. Save money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to <span className={classes.specialText}>celebration</span>
              .
            </Typography>
            <Button variant="outlined" size="small" className={classes.learnButtonSecondary}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.softwareIcon} alt="custom software icon" src={customSoftwareIcon} />
          </Grid>
        </Grid>
      </Grid>

      {/* ----- IOS/ANDROID BLOCK ----- */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={viewportIsSmallOrBelow ? 'center' : 'flex-end'}
          className={classes.servicesContainer}
        >
          <Grid
            item
            style={{
              textAlign: viewportIsSmallOrBelow ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              Extend functionality. Extend access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app{viewportIsSmallOrBelow ? null : <br />} with
              either mobile platform.
            </Typography>
            <Button variant="outlined" size="small" className={classes.learnButtonSecondary}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
            </Button>
          </Grid>
          <Grid item style={{ marginLeft: viewportIsSmallOrBelow ? 0 : '5em' }}>
            <img className={classes.mobileAppsIcon} alt="mobile phone icon" src={mobileAppsIcon} />
          </Grid>
        </Grid>
      </Grid>

      {/* ----- WEBSITE DEV BLOCK ----- */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={viewportIsSmallOrBelow ? 'center' : undefined}
          className={classes.servicesContainer}
        >
          <Grid
            item
            style={{
              marginLeft: viewportIsSmallOrBelow ? '1em' : '5em',
              textAlign: viewportIsSmallOrBelow ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              Reach more. Discover more. Sell more.
            </Typography>
            <Typography variant="subtitle1">Optimized for search engines. Built for speed.</Typography>
            <Button variant="outlined" size="small" className={classes.learnButtonSecondary}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.softwareIcon} alt="website icon" src={websitesIcon} />
          </Grid>
        </Grid>
      </Grid>

      {/* ----- REVOLUTION CARD ----- */}
      <Grid item>
        <Grid container justify="center" alignItems="center" style={{ height: '100em', marginTop: '12em' }}>
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid container direction="column" style={{ textAlign: 'center' }}>
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a recipe for revolution
                  </Typography>
                  <Button variant="outlined" className={classes.learnButtonHero}>
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
