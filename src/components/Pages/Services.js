import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ViewportContext } from '../../Contexts/ViewportContext';
import { RouteContext } from '../../Contexts/RouteContext';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import mobileAppsIcon from '../../assets/mobileIcon.svg';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import ButtonArrow from '../Shared/ButtonArrow';
import websitesIcon from '../../assets/websiteIcon.svg';

const useStyles = makeStyles((theme) => ({
  servicesContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2em',
      padding: 25,
    },
  },
  marginRight: {
    marginRight: '5em',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
  },
  marginLeft: {
    marginLeft: '5em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  pageTitle: {
    marginLeft: '5em',
    marginTop: '2em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: '1em',
      textAlign: 'center',
    },
  },
  width35: {
    width: '35em',
    [theme.breakpoints.down('sm')]: {
      width: 'inherit',
    },
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
}));

const Services = () => {
  const { handleSetNavChoice, handleSetSelectedSubMenuItem } = useContext(RouteContext);
  const { viewportIsSmallOrBelow } = useContext(ViewportContext);

  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="column">
      <Grid item className={classes.pageTitle}>
        <Typography variant="h2" gutterBottom>
          Services
        </Typography>
      </Grid>
      {/* ----- MOBILE APPS BLOCK ----- */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={viewportIsSmallOrBelow ? 'center' : 'flex-end'}
          className={classes.servicesContainer}
          style={{ marginTop: viewportIsSmallOrBelow ? '1em' : undefined }}
        >
          <Grid
            item
            style={{
              textAlign: viewportIsSmallOrBelow ? 'center' : undefined,
            }}
            className={classes.width35}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              Extend functionality. Extend access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app{viewportIsSmallOrBelow ? null : <br />} with
              either mobile platform.
            </Typography>
            <Button
              component={Link}
              to="/mobileapps"
              onClick={() => {
                handleSetNavChoice(1);
                handleSetSelectedSubMenuItem(2);
              }}
              variant="outlined"
              size="small"
              className={classes.learnButtonSecondary}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
            </Button>
          </Grid>
          <Grid item className={classes.marginRight}>
            <img alt="mobile phone icon" src={mobileAppsIcon} width="250em" />
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
              textAlign: viewportIsSmallOrBelow ? 'center' : undefined,
            }}
            className={classes.marginLeft}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              Save energy. Save time. Save money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to <span className={classes.specialText}>celebration</span>
              .
            </Typography>
            <Button
              component={Link}
              to="/customsoftware"
              onClick={() => {
                handleSetNavChoice(5);
                handleSetSelectedSubMenuItem(1);
              }}
              variant="outlined"
              size="small"
              className={classes.learnButtonSecondary}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.softwareIcon} alt="custom software icon" src={customSoftwareIcon} />
          </Grid>
        </Grid>
      </Grid>

      {/* ----- WEBSITE DEV BLOCK ----- */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify={viewportIsSmallOrBelow ? 'center' : 'flex-end'}
          className={classes.servicesContainer}
          style={{ marginBottom: '10em' }}
        >
          <Grid
            item
            style={{
              textAlign: viewportIsSmallOrBelow ? 'center' : undefined,
            }}
            className={classes.width35}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              Reach more. Discover more. Sell more.
            </Typography>
            <Typography variant="subtitle1">Optimized for search engines. Built for speed.</Typography>
            <Button
              component={Link}
              to="/websites"
              onClick={() => {
                handleSetNavChoice(1);
                handleSetSelectedSubMenuItem(3);
              }}
              variant="outlined"
              size="small"
              className={classes.learnButtonSecondary}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
            </Button>
          </Grid>
          <Grid item className={classes.marginRight}>
            <img alt="website icon" src={websitesIcon} width="250em" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
