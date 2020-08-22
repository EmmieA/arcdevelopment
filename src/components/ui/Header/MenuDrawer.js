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
  // this class is duplicated in Header.js and should be centralized somewhere
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
    opacity: 0.7,
  },
  drawerItemSelected: {
    '& .MuiListItemText-Root': {
      opacity: 1,
    },
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
}));

// from the online docs - if not iOS, the drawer functions a bit weird so the component
// uses a couple of props to enable good rendering
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const MenuDrawer = ({ navChoice, handleSetNavChoice }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const classes = useStyles();

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
        <div className={classes.toolbarMargin} />
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
            classes={{ selected: classes.drawerItemSelected }}
          >
            <ListItemText
              // dynamic application of classes to change the opacity of the item when it's been selected
              className={classes.drawerItem}
              disableTypography
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setIsDrawerOpen(false);
              handleSetNavChoice(1);
            }}
            component={Link}
            to="/services"
            selected={navChoice === 1}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Services
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setIsDrawerOpen(false);
              handleSetNavChoice(2);
            }}
            component={Link}
            to="/revolution"
            selected={navChoice === 2}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setIsDrawerOpen(false);
              handleSetNavChoice(3);
            }}
            component={Link}
            to="/about"
            selected={navChoice === 3}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setIsDrawerOpen(false);
              handleSetNavChoice(4);
            }}
            component={Link}
            to="/contact"
            selected={navChoice === 4}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => {
              setIsDrawerOpen(false);
              handleSetNavChoice(5);
            }}
            component={Link}
            to="/estimate"
            className={classes.drawerItemEstimate}
            selected={navChoice === 5}
            classes={{ root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }}
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

export default MenuDrawer;
