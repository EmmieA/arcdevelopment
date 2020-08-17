import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { theme } from '@material-ui/core/styles';

import logo from '../../assets/logo.svg';
import TabMenu from './TabMenu';
import DrawerMenu from './DrawerMenu';

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.5em',
    },
  },
  logo: {
    height: '8em',
    // example of resizing an image when the viewport moves DOWN to a medium size
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  logoLink: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const servicesMenuItems = [
  { name: 'Services', path: '/services' },
  { name: 'Custom Software Development', path: '/customsoftware' },
  { name: 'Mobile App Development', path: '/mobileapps' },
  { name: 'Website Development', path: '/websites' },
];

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme(); // gives access to the theme within component code

  const viewportIsMediumOrLess = useMediaQuery(theme.breakpoints.down('md'));

  const [navChoice, setNavChoice] = useState(0);
  const [selectedNavChoice, setSelectedNavChoice] = useState(null);
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  // This ensures if the page is refreshed that the previously-selected
  // menu item remains selected.
  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        if (navChoice !== 0) {
          setNavChoice(0);
        }
        break;
      case '/services':
        if (navChoice !== 1) {
          setNavChoice(1);
          setSelectedMenuItem(0);
        }
        break;
      case '/customsoftware':
        if (navChoice !== 1) {
          setNavChoice(1);
          setSelectedMenuItem(1);
        }
        break;
      case '/mobileapps':
        if (navChoice !== 1) {
          setNavChoice(1);
          setSelectedMenuItem(2);
        }
        break;
      case '/websites':
        if (navChoice !== 1) {
          setNavChoice(1);
          setSelectedMenuItem(3);
        }
        break;
      case 'revolution':
        if (navChoice !== 2) {
          setNavChoice(2);
        }
        break;
      case '/about':
        if (navChoice !== 3) {
          setNavChoice(3);
        }
        break;
      case '/contact':
        if (navChoice !== 4) {
          setNavChoice(4);
        }
        break;
      default:
        break;
    }
  }, [navChoice]);

  const handleNavChange = (e, value) => {
    setNavChoice(value);
  };

  const handleOpenClick = (e) => {
    setSelectedNavChoice(e.currentTarget);
    setNavMenuIsOpen(true);
  };

  const handleCloseClick = (e) => {
    setSelectedNavChoice(null);
    setNavMenuIsOpen(false);
  };

  const handleMenuItemClick = (e, i) => {
    setNavChoice(null);
    setNavMenuIsOpen(false);
    setSelectedMenuItem(i);
  };

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button component={Link} to="/" onClick={() => setNavChoice(0)} className={classes.logoLink} disableRipple>
              <img alt="Company logo" className={classes.logo} src={logo} />
            </Button>

            {viewportIsMediumOrLess ? (
              <DrawerMenu />
            ) : (
              <TabMenu
                classes={classes}
                navChoice={navChoice}
                handleNavChange={handleNavChange}
                selectedNavChoice={selectedNavChoice}
                navMenuIsOpen={navMenuIsOpen}
                handleCloseClick={handleCloseClick}
                handleOpenClick={handleOpenClick}
                handleMenuItemClick={handleMenuItemClick}
                setNavChoice={setNavChoice}
                selectedMenuItem={selectedMenuItem}
                servicesMenuItems={servicesMenuItems}
              />
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
