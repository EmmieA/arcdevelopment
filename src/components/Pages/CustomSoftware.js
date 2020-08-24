/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Lottie from 'react-lottie';

import { RouteContext } from '../../Contexts/RouteContext';

import { useTheme, makeStyles } from '@material-ui/styles';

import { IconButton, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import backArrow from '../../assets/backArrow.svg';
import forwardArrow from '../../assets/forwardArrow.svg';
import lightbulb from '../../assets/bulb.svg';
import cash from '../../assets/cash.svg';
import stopwatch from '../../assets/stopwatch.svg';
import tree from '../../assets/root.svg';
import documentsAnimation from '../../animations/documentsAnimation/data.js';
import scaleAnimation from '../../animations/scaleAnimation/data.json';
import automationAnimation from '../../animations/automationAnimation/data.json';
import uxAnimation from '../../animations/uxAnimation/data.js';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    paddingTop: '2em',
    paddingBottom: '10em',
  },
  iconContainer: {
    marginTop: '15em',
    marginBottom: '20em',
  },
  textContainer: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.3em',
  },
}));

const CustomSoftware = () => {
  const { handleSetNavChoice, handleSetSelectedSubMenuItem } = useContext(RouteContext);
  const classes = useStyles();
  const theme = useTheme();

  const aniDocumentOptions = {
    loop: true,
    autoplay: false,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRation: 'xMidYMid slice',
    },
  };

  const aniScaleOptions = {
    loop: true,
    autoplay: false,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRation: 'xMidYMid slice',
    },
  };

  const aniAutomationOptions = {
    loop: true,
    autoplay: false,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRation: 'xMidYMid slice',
    },
  };

  const aniUxOptions = {
    loop: true,
    autoplay: false,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRation: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/* ----- TITLE & ARROWS ----- */}
      <Grid item container direction="row">
        <Grid item className={classes.arrowContainer} style={{ marginRight: '1em', marginLeft: '-3.5em' }}>
          <IconButton
            component={Link}
            to="/services"
            onClick={() => handleSetNavChoice(1)}
            style={{ backgroundColor: 'transparent' }}
          >
            <img src={backArrow} alt="back to services page" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.textContainer}>
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Whether we’re replacing old software or inventing new solutions, Arc Development is here to help your
              business tackle technology.
            </Typography>
            <Typography variant="body1" paragraph>
              Using regular commercial software leaves you with a lot of stuff you don’t need, without some of the stuff
              you do need, and ultimately controls the way you work. Without using any software at all you risk falling
              behind competitors and missing out on huge savings from increased efficiency.
            </Typography>
            <Typography variant="body1" paragraph>
              Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This
              collaborative process produces finely tuned software that is much more effective at improving your
              workflow and reducing costs than generalized options.
            </Typography>
            <Typography variant="body1" paragraph>
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            component={Link}
            to="/mobileapps"
            onClick={() => {
              handleSetNavChoice(1);
              handleSetSelectedSubMenuItem(2);
            }}
            style={{ backgroundColor: 'transparent' }}
          >
            <img src={forwardArrow} alt="go to ios and android page" />
          </IconButton>
        </Grid>
      </Grid>
      {/* ----- ENERGY TIME MONEY ----- */}
      <Grid item container direction="row" justify="center" className={classes.iconContainer}>
        <Grid item container direction="column" alignItems="center" md style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightbulb"></img>
          </Grid>
        </Grid>

        <Grid item container direction="column" alignItems="center" md style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch"></img>
          </Grid>
        </Grid>

        <Grid item container direction="column" alignItems="center" md style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash"></img>
          </Grid>
        </Grid>
      </Grid>
      {/* ----- DIGITAL DOCS & SCALE ----- */}
      <Grid item container direction="row" justify="space-around">
        <Grid item container className={classes.textContainer} md>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4">Digital Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography variant="body1" paragraph>
                Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the
                massive environmental impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography variant="body1" paragraph>
                By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your
                communication, and help the Earth.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie
            options={aniDocumentOptions}
            isStopped={false}
            style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
          />
        </Grid>
        <Grid item md>
          <Lottie options={aniScaleOptions} isStopped={false} style={{ maxHeight: 260, maxWidth: 280 }} />
        </Grid>
        <Grid item container className={classes.textContainer} md>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4" align="right">
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align="right">
                Whether you’re a large brand, just getting started, or taking off right now, our application
                architecture ensures pain-free growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* ----- ROOT CAUSE TREE ----- */}
      <Grid item container direction="column" alignItems="center" style={{ marginTop: '20em', marginBottom: '20em' }}>
        <Grid item md>
          <img src={tree} alt="tree with roots extending" height="450em" width="450em" />
        </Grid>
        <Grid item container direction="column" alignItems="center" className={classes.textContainer}>
          <Grid item md>
            <Typography variant="h4">Root Cause Analysis</Typography>
          </Grid>
          <Typography variant="body1" paragraph align="center">
            Many problems are merely symptoms of larger, underlying issues.
          </Typography>
          <Typography variant="body1" paragraph align="center">
            We can help you thoroughly examine all areas of your business to develop a holistic plan for the most
            effective implementation of technology.
          </Typography>
        </Grid>
      </Grid>
      {/* ----- AUTOMATION & EXPERIENCE ----- */}
      <Grid item container direction="row" justify="space-around" style={{ marginBottom: '10em' }}>
        <Grid item container className={classes.textContainer} md>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4">Automation</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Why waste time when you don’t have to?
              </Typography>
              <Typography variant="body1" paragraph>
                We can help you identify processes with time or event based actions which can now easily be automated.
              </Typography>
              <Typography variant="body1" paragraph>
                Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={aniAutomationOptions} isStopped={false} style={{ maxHeight: 290, maxWidth: 280 }} />
        </Grid>
        <Grid item md>
          <Lottie options={aniUxOptions} isStopped={false} style={{ maxHeight: 310, maxWidth: 155 }} />
        </Grid>
        <Grid item container className={classes.textContainer} md>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4" align="right">
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align="right">
                A good design that isn’t usable isn’t a good design.
              </Typography>
              <Typography variant="body1" paragraph align="right">
                So why are so many pieces of software complicated, confusing, and frustrating?
              </Typography>
              <Typography variant="body1" paragraph align="right">
                By prioritizing users and the real ways they interact with technology we’re able to develop unique,
                personable experiences that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>{' '}
    </Grid>
  );
};

export default CustomSoftware;
