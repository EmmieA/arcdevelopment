import React, { useState } from 'react';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const DrawerMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      onOpen={() => setIsDrawerOpen(true)}
    >
      Example drawer
    </SwipeableDrawer>
  );
};

export default DrawerMenu;
