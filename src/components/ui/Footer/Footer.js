import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { RouteContext } from '../../../Contexts/RouteContext';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';

import footerAdornment from '../../../assets/Footer Adornment.svg';
import facebook from '../../../assets/facebook.svg';
import twitter from '../../../assets/twitter.svg';
import instagram from '../../../assets/instagram.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    position: 'relative',
    zIndex: 1302,
  },
  footerImage: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  columnSpacing: {
    margin: '3em',
  },
  logoIcon: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down('xs')]: {
      height: '2.5em',
      width: '2.5em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em',
    },
  },
}));

const Footer = () => {
  const { handleSetNavChoice, handleSetSelectedSubMenuItem } = useContext(RouteContext);
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.columnSpacing}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} onClick={() => handleSetNavChoice(0)} to="/" className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.columnSpacing}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  handleSetNavChoice(1);
                  handleSetSelectedSubMenuItem(0);
                }}
                to="/services"
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  handleSetNavChoice(1);
                  handleSetSelectedSubMenuItem(1);
                }}
                to="/customsoftware"
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  handleSetNavChoice(1);
                  handleSetSelectedSubMenuItem(2);
                }}
                to="/mobileapps"
                className={classes.link}
              >
                iOS/Android App Development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  handleSetNavChoice(1);
                  handleSetSelectedSubMenuItem(3);
                }}
                to="/websites"
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.columnSpacing}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => handleSetNavChoice(2)}
                to="/revolution"
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => handleSetNavChoice(2)}
                to="/revolution"
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => handleSetNavChoice(2)}
                to="/revolution"
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => handleSetNavChoice(2)}
                to="/revolution"
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.columnSpacing}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} onClick={() => handleSetNavChoice(3)} to="/about" className={classes.link}>
                About Us
              </Grid>
              <Grid item component={Link} onClick={() => handleSetNavChoice(3)} to="/about" className={classes.link}>
                History
              </Grid>
              <Grid item component={Link} onClick={() => handleSetNavChoice(3)} to="/about" className={classes.link}>
                Team
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.columnSpacing}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} onClick={() => handleSetNavChoice(4)} to="/contact" className={classes.link}>
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img alt="black decorative slash" src={footerAdornment} className={classes.footerImage} />

      <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
        <Grid item component={'a'} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
          <img alt="facebook logo" src={facebook} className={classes.logoIcon} />
        </Grid>
        <Grid item component={'a'} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
          <img alt="twitter logo" src={twitter} className={classes.logoIcon} />
        </Grid>
        <Grid item component={'a'} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
          <img alt="instagram logo" src={instagram} className={classes.logoIcon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
