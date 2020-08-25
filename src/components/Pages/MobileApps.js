/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useTheme, makeStyles } from '@material-ui/styles';

import { IconButton, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import backArrow from '../../assets/backArrow.svg';
import forwardArrow from '../../assets/forwardArrow.svg';
import swissKnife from '../../assets/swissKnife.svg';
import extendAccess from '../../assets/extendAccess.svg';
import increaseEngagement from '../../assets/increaseEngagement.svg';
import cellphoneAnimation from '../../animations/integrationAnimation/data.json';

import { RouteContext } from '../../Contexts/RouteContext';
import { ViewportContext } from '../../Contexts/ViewportContext';
import Lottie from 'react-lottie';
import CallToAction from '../ui/CallToAction/CallToAction';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    paddingTop: '2em',
    paddingBottom: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
      paddingTop: '1em',
    },
  },
  textContainerMax40: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.3em',
  },
}));

const aniCellphoneOptions = {
  loop: true,
  autoplay: false,
  animationData: cellphoneAnimation,
  rendererSettings: {
    preserveAspectRation: 'xMidYMid slice',
  },
};

const MobileApps = () => {
  const { handleSetNavChoice, handleSetSelectedSubMenuItem } = useContext(RouteContext);
  const { viewportIsXsOrBelow, viewportIsSmallOrBelow, viewportIsMediumOrBelow } = useContext(ViewportContext);
  const classes = useStyles();

  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        {/* ----- FIRST ROW ----- */}
        <Grid item container direction="row" justify={viewportIsMediumOrBelow ? 'center' : undefined}>
          <Hidden mdDown>
            <Grid item className={classes.arrowContainer} style={{ marginRight: '1em', marginLeft: '-3.5em' }}>
              <IconButton
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  handleSetNavChoice(1);
                  handleSetSelectedSubMenuItem(1);
                }}
                style={{ backgroundColor: 'transparent' }}
              >
                <img src={backArrow} alt="back to custom software" />
              </IconButton>
            </Grid>
          </Hidden>

          <Grid item md className={classes.textContainerMax40}>
            <Typography variant="h2">iOS/Android App Development</Typography>
            <Typography paragraph>Mobile apps allow you to take your tools on the go.</Typography>
            <Typography paragraph>
              Whether you want an app for your customers, employees, or yourself, we can build cross-platform native
              solutions for any part of your business process. This opens you up to a whole new world of possibilities
              by taking advantage of phone features like the camera, GPS, push notifications, and more.
            </Typography>
            <Typography paragraph>Convenience. Connection.</Typography>
          </Grid>

          <Hidden mdDown>
            <Grid item className={classes.arrowContainer}>
              <IconButton
                component={Link}
                to="/websites"
                onClick={() => {
                  handleSetNavChoice(1);
                  handleSetSelectedSubMenuItem(3);
                }}
                style={{ backgroundColor: 'transparent' }}
              >
                <img src={forwardArrow} alt="go to website development" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>

        {/* ----- SECOND ROW ----- */}
        <Grid
          item
          container
          direction={viewportIsSmallOrBelow ? 'column' : 'row'}
          style={{ marginTop: '15em', marginBottom: '15em' }}
        >
          <Grid item container direction="column" md>
            <Typography variant="h4" gutterBottom align={viewportIsSmallOrBelow ? 'center' : undefined}>
              Integration
            </Typography>
            <Typography paragraph align={viewportIsSmallOrBelow ? 'center' : undefined}>
              Our technology enables an innate interconnection between web and mobile applications, putting everything
              you need right in one convenient place.
            </Typography>
            <Typography paragraph align={viewportIsSmallOrBelow ? 'center' : undefined}>
              This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your
              users than ever before.
            </Typography>
          </Grid>

          <Grid item md style={{ marginBottom: viewportIsMediumOrBelow ? '2em' : 0 }}>
            <Lottie options={aniCellphoneOptions} style={{ maxWidth: '20em' }} />
          </Grid>

          <Grid item container direction="column" md>
            <Typography variant="h4" gutterBottom align={viewportIsSmallOrBelow ? 'center' : 'right'}>
              Simultaneous Platform Support
            </Typography>
            <Typography paragraph align={viewportIsSmallOrBelow ? 'center' : 'right'}>
              Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets — all at
              the same time.
            </Typography>
            <Typography paragraph align={viewportIsSmallOrBelow ? 'center' : 'right'}>
              This significantly reduces costs and creates a more unified brand experience across all devices.
            </Typography>
          </Grid>
        </Grid>

        {/* ----- THIRD ROW ----- */}
        <Grid item container direction={viewportIsMediumOrBelow ? 'column' : 'row'} style={{ marginBottom: '15em' }}>
          <Grid item container direction="column" alignItems="center" md>
            <Typography variant="h4" gutterBottom>
              Extend Functionality
            </Typography>
            <img src={swissKnife} alt="swiss knife" />
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            md
            style={{
              marginTop: viewportIsMediumOrBelow ? '10em' : 0,
              marginBottom: viewportIsMediumOrBelow ? '10em' : 0,
            }}
          >
            <Typography variant="h4" gutterBottom>
              Extend Access
            </Typography>
            <img
              src={extendAccess}
              alt="tear-one-off sign"
              style={{ maxWidth: viewportIsXsOrBelow ? '20em' : '28em' }}
            />
          </Grid>
          <Grid item container direction="column" alignItems="center" md>
            <Typography variant="h4" gutterBottom>
              Increase Engagement
            </Typography>
            <img src={increaseEngagement} alt="boring blue box" style={{ maxWidth: '28em' }} />
          </Grid>
        </Grid>
      </Grid>

      <CallToAction />
    </>
  );
};

export default MobileApps;
