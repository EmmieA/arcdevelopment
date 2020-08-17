import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
}));

const DrawerMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const classes = useStyles();

  // from the online docs - if not iOS, the drawer functions a bit weird so the component
  // uses a couple of props to enable good rendering
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
      >
        Example drawer
      </SwipeableDrawer>
      <IconButton disableRipple onClick={() => setIsDrawerOpen(!isDrawerOpen)} className={classes.drawerIconContainer}>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
};

export default DrawerMenu;
