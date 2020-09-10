import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { RouteContext } from '../../Contexts/RouteContext';
import { ViewportContext } from '../../Contexts/ViewportContext';

import { makeStyles } from '@material-ui/styles';

import { IconButton, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import backArrow from '../../assets/backArrow.svg';
import forwardArrow from '../../assets/forwardArrow.svg';
import analytics from '../../assets/analytics.svg';
import seo from '../../assets/seo.svg';
import outreach from '../../assets/outreach.svg';
import ecommerce from '../../assets/ecommerce.svg';
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
  paragraphContainer: {
    maxWidth: '30em',
    [theme.breakpoints.down('sm')]: {
      marginTop: '1.25em',
      textAlign: 'center',
    },
  },
  arrowContainer: {
    marginTop: '0.3em',
  },
}));

const Websites = () => {
  const { handleSetNavChoice, handleSetSelectedSubMenuItem } = useContext(RouteContext);
  const { viewportIsSmallOrBelow, viewportIsMediumOrBelow } = useContext(ViewportContext);

  const classes = useStyles();

  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        {/* ----- HEADING ROW ----- */}
        <Grid item container direction="row" justify={viewportIsMediumOrBelow ? 'center' : undefined}>
          <Hidden mdDown>
            <Grid item className={classes.arrowContainer} style={{ marginRight: '1em', marginLeft: '-3.5em' }}>
              <IconButton
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  handleSetNavChoice(1);
                  handleSetSelectedSubMenuItem(2);
                }}
                style={{ backgroundColor: 'transparent' }}
              >
                <img src={backArrow} alt="back to mobile apps" />
              </IconButton>
            </Grid>
          </Hidden>

          <Grid item md className={classes.paragraphContainer}>
            <Typography variant="h2">Website Development</Typography>
            <Typography paragraph>
              Having a website is a necessity in today’s business world. They give you one central, public location to
              let people know who you are, what you do, and why you’re the best at it.
            </Typography>
            <Typography paragraph>
              From simply having your hours posted to having a full fledged online store, making yourself as accessible
              as possible to users online drives growth and enables you to reach new customers.{' '}
            </Typography>
          </Grid>

          <Hidden mdDown>
            <Grid item className={classes.arrowContainer}>
              <IconButton
                component={Link}
                to="/services"
                onClick={() => {
                  handleSetNavChoice(1);
                  handleSetSelectedSubMenuItem(0);
                }}
                style={{ backgroundColor: 'transparent' }}
              >
                <img src={forwardArrow} alt="return to services" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>

        {/* ----- ANALYTICS ROW ----- */}
        <Grid
          item
          container
          direction={viewportIsSmallOrBelow ? 'column' : 'row'}
          alignItems="center"
          style={{ marginTop: '15em' }}
        >
          <Grid item md style={{ maxWidth: '25em' }}>
            <Grid item container direction="column" justify={viewportIsSmallOrBelow ? 'center' : undefined}>
              <Grid item>
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ textAlign: viewportIsSmallOrBelow ? 'center' : undefined }}
                >
                  Analytics
                </Typography>
              </Grid>
              <Grid item>
                <img src={analytics} alt="graph with magnifying glass" style={{ marginLeft: '-2.5em' }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md className={classes.paragraphContainer}>
            <Typography variant="body1" paragraph style={{ textAlign: viewportIsSmallOrBelow ? 'center' : undefined }}>
              Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and
              trends in your business, empowering you to make smarter decisions with measurable effects.
            </Typography>
          </Grid>
        </Grid>

        {/* ----- ECOMMERCE ROW ----- */}
        <Grid
          item
          container
          direction={viewportIsSmallOrBelow ? 'column' : 'row'}
          justify="flex-end"
          alignItems="center"
          style={{ marginBottom: '15em', marginTop: '15em' }}
        >
          <Grid item md style={{ maxWidth: '25em' }}>
            <Grid item container direction="column" alignItems="center">
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  E-Commerce
                </Typography>
              </Grid>
              <Grid item>
                <img src={ecommerce} alt="globe made of dollar signs" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md className={classes.paragraphContainer}>
            <Typography variant="body1" paragraph>
              It’s no secret that people like to shop online.
            </Typography>
            <Typography variant="body1" paragraph>
              In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.
            </Typography>
          </Grid>
        </Grid>

        {/* ----- OUTREACH ROW ----- */}
        <Grid
          item
          container
          direction={viewportIsSmallOrBelow ? 'column' : 'row'}
          alignItems="center"
          style={{ marginTop: '15em' }}
        >
          <Grid item md style={{ maxWidth: '20em' }}>
            <Grid item container direction="column">
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  Outreach
                </Typography>
              </Grid>
              <Grid item>
                <img src={outreach} alt="megaphone calling you" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md className={classes.paragraphContainer}>
            <Typography variant="body1" paragraph>
              Draw people in with a dazzling website. Showing off your products online is a great way to help customers
              decide what’s right for them before visiting in person.{' '}
            </Typography>
          </Grid>
        </Grid>

        {/* ----- SEARCH ENGINE OPTIMIZATION ROW ----- */}
        <Grid
          item
          container
          direction={viewportIsSmallOrBelow ? 'column' : 'row'}
          justify="flex-end"
          alignItems="center"
          style={{ marginBottom: '15em', marginTop: '15em' }}
        >
          <Grid item md style={{ maxWidth: '25em' }}>
            <Grid item container direction="column" alignItems="center">
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  Search Engine
                  <br />
                  Optimization
                </Typography>
              </Grid>
              <Grid item>
                <img src={seo} alt="search engine optimized" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md className={classes.paragraphContainer}>
            <Typography variant="body1" paragraph>
              How often have you ever been to the second page of Google results?
            </Typography>
            <Typography variant="body1" paragraph>
              If you’re like us, probably never.
            </Typography>
            <Typography variant="body1" paragraph>
              Customers don’t go there either, so we make sure your website is designed to end up on top.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <CallToAction />
    </>
  );
};

export default Websites;
