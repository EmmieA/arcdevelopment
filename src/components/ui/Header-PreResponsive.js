import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import logo from '../../assets/logo.svg';

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logo: {
    height: '8em',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  freeEstimate: {
    ...theme.typography.estimate,
    marginLeft: '50px',
    marginRight: '25px',
    borderRadius: '50px',
    height: '45px',
  },
  logoLink: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  menu: {
    /* Used to pass down into the Paper component which is used by Menu */
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
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

  function renderMenuItem(menuItem, index) {
    return (
      <MenuItem
        key={`${menuItem.name}_${index}`}
        component={Link}
        to={menuItem.path}
        // Calling multiple functions on a single event
        onClick={(event) => {
          handleMenuItemClick(event, index);
          handleCloseClick();
          setNavChoice(1); // we know this is the Services nav item so set it explicitly
        }}
        classes={{ root: classes.menuItem }}
        selected={index === selectedMenuItem && selectedNavChoice === 1} // ensures it doesn't show as still selected after clicking on another top level nav item
      >
        {menuItem.name}
      </MenuItem>
    );
  }

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button component={Link} to="/" onClick={() => setNavChoice(0)} className={classes.logoLink} disableRipple>
              <img alt="Company logo" className={classes.logo} src={logo} />
            </Button>

            <Tabs
              value={navChoice}
              onChange={handleNavChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab className={classes.tab} component={Link} to="/" label="Home" />
              <Tab
                aria-owns={selectedNavChoice ? 'services-menu' : undefined}
                aria-haspopup={selectedNavChoice ? 'true' : undefined}
                onMouseOver={(event) => handleOpenClick(event)}
                className={classes.tab}
                component={Link}
                to="/services"
                label="Services"
              />
              <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />
              <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
              <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
            </Tabs>

            <Button variant="contained" color="secondary" className={classes.freeEstimate}>
              Free Estimate
            </Button>

            <Menu
              id="services-menu"
              anchorEl={selectedNavChoice}
              open={navMenuIsOpen}
              onClose={handleCloseClick}
              // Passing a class to a child component which needs to be styled
              // Find what components make up a parent by looking at the parent component's API page
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleCloseClick }}
              elevation={0}
            >
              {servicesMenuItems.map((menuItem, index) => renderMenuItem(menuItem, index))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
