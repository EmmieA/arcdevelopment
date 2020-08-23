/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { RouteContext } from '../../Contexts/RouteContext';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ButtonArrow from '../../Shared/ButtonArrow';
import background from '../../../assets/background.jpg';
import mobileBackground from '../../../assets/mobileBackground.jpg';

const useStyles = makeStyles((theme) => ({
  learnButtonSecondary: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  callToActionBackground: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // oh my god this is so COOL! parallax affect
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginLeft: '2em',
    marginRight: '5em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: '1em',
    },
  },
}));

const CallToAction = () => {
  const { handleSetNavChoice, handleSetSelectedSubMenuItem } = useContext(RouteContext);
  const classes = useStyles();
  const theme = useTheme();

  const viewportIsSmallOrBelow = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      direction={viewportIsSmallOrBelow ? 'column' : 'row'}
      alignItems="center"
      justify={viewportIsSmallOrBelow ? 'center' : 'space-between'}
      className={classes.callToActionBackground}
    >
      <Grid
        item
        style={{
          marginLeft: viewportIsSmallOrBelow ? 0 : '5em',
          textAlign: viewportIsSmallOrBelow ? 'center' : 'inherit',
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software
              <br />
              Revolutionary Results
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: '1.5rem' }}>
              Take advantage of the 21st century.
            </Typography>
            <Grid container justify={viewportIsSmallOrBelow ? 'center' : undefined} item>
              <Button
                component={Link}
                to="/revolution"
                onClick={() => handleSetNavChoice(2)}
                variant="outlined"
                size="small"
                className={classes.learnButtonSecondary}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/estimate"
          onClick={() => handleSetNavChoice(5)}
          variant="contained"
          className={classes.estimateButton}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
