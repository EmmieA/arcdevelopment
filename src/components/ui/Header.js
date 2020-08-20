import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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

const routes = [
  { name: 'Home', path: '/', topLevelId: 0 },
  { name: 'Services', path: '/services', topLevelId: 1 },
  { name: 'The Revolution', path: '/revolution', topLevelId: 2 },
  { name: 'About Us', path: '/about', topLevelId: 3 },
  { name: 'Contact Us', path: '/contact', topLevelId: 4 },
];

const servicesMenuItems = [
  { name: 'Services', path: '/services', topLevelId: 1, secondLevelId: 0 },
  { name: 'Custom Software Development', path: '/customsoftware', topLevelId: 1, secondLevelId: 1 },
  { name: 'Mobile App Development', path: '/mobileapps', topLevelId: 1, secondLevelId: 2 },
  { name: 'Website Development', path: '/websites', topLevelId: 1, secondLevelId: 3 },
];

const Header = () => {
  const classes = useStyles();
  const theme = useTheme(); // gives access to the theme within component code

  const viewportIsMediumOrLess = useMediaQuery(theme.breakpoints.down('md'));

  const [navChoice, setNavChoice] = useState(0);
  const [selectedSubMenuItem, setSelectedSubMenuItem] = useState(0);
  const [secondLevelId, setSecondLevelId] = useState(0);

  // This ensures if the page is refreshed that the previously-selected
  // menu item remains selected.
  useEffect(() => {
    [...routes, ...servicesMenuItems].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.path}`:
          if (navChoice !== route.topLevelId) {
            setNavChoice(route.topLevelId);
            if (route.secondLevelId && route.secondLevelId !== secondLevelId) {
              setSecondLevelId(route.secondLevelId);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [navChoice, secondLevelId]);

  const handleSetNavChoice = (choice) => {
    setNavChoice(choice);
  };

  const handleSetSelectedSubMenuItem = (choice) => {
    setSelectedSubMenuItem(choice);
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
              <DrawerMenu
                navChoice={navChoice}
                handleSetNavChoice={handleSetNavChoice}
                servicesMenuItems={servicesMenuItems}
              />
            ) : (
              <TabMenu
                navChoice={navChoice}
                handleSetNavChoice={handleSetNavChoice}
                selectedSubMenuItem={selectedSubMenuItem}
                handleSetSelectedSubMenuItem={handleSetSelectedSubMenuItem}
                servicesMenuItems={servicesMenuItems}
              />
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
