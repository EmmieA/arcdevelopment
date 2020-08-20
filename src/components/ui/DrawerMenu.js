import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
}));

const DrawerMenu = ({ navChoice, servicesMenuItems, setNavChoice }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const classes = useStyles();

  const handleSetNavChoice = (navChoice) => {
    setNavChoice(navChoice);
  };

  // from the online docs - if not iOS, the drawer functions a bit weird so the component
  // uses a couple of props to enable good rendering
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const renderServicesSubMenu = (menuItem, index) => {
    return (
      <ListItem component={Link}>
        <ListItemText className={classes.drawerItem} disableTypography component={Link} to="/">
          {menuItem.name}
        </ListItemText>
      </ListItem>
    );
  };

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          <ListItem
            divider
            button
            onClick={() => {
              setIsDrawerOpen(false);
              handleSetNavChoice(0);
            }}
            component={Link}
            to="/"
            selected={navChoice === 0}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Home
            </ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => setIsDrawerOpen(false)} component={Link} to="/services">
            <ListItemText className={classes.drawerItem} disableTypography>
              Services
            </ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => setIsDrawerOpen(false)} component={Link} to="/revolution">
            <ListItemText className={classes.drawerItem} disableTypography>
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => setIsDrawerOpen(false)} component={Link} to="/about">
            <ListItemText className={classes.drawerItem} disableTypography>
              About Us
            </ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => setIsDrawerOpen(false)} component={Link} to="/contact">
            <ListItemText className={classes.drawerItem} disableTypography>
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => setIsDrawerOpen(false)}
            component={Link}
            to="/estimate"
            className={classes.drawerItemEstimate}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton disableRipple onClick={() => setIsDrawerOpen(!isDrawerOpen)} className={classes.drawerIconContainer}>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
};

export default DrawerMenu;
