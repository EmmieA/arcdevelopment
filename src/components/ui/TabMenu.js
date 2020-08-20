import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
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
}));

const TabMenuBar = ({
  navChoice,
  handleSetNavChoice,
  selectedSubMenuItem,
  handleSetSelectedSubMenuItem,
  servicesMenuItems,
}) => {
  const classes = useStyles();

  const [selectedNavChoice, setSelectedNavChoice] = useState(null);
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);

  const handleNavChange = (e, value) => {
    handleSetNavChoice(value);
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
    handleSetNavChoice(null);
    setNavMenuIsOpen(false);
    handleSetSelectedSubMenuItem(i);
  };

  function renderServicesSubMenu(menuItem, index) {
    return (
      <MenuItem
        key={`${menuItem.name}_${index}`}
        component={Link}
        to={menuItem.path}
        // Calling multiple functions on a single event
        onClick={(event) => {
          handleMenuItemClick(event, index);
          handleCloseClick();
          handleSetNavChoice(1); // we know this is the Services nav item so set it explicitly
        }}
        classes={{ root: classes.menuItem }}
        selected={index === selectedSubMenuItem && selectedNavChoice === 1} // ensures it doesn't show as still selected after clicking on another top level nav item
      >
        {menuItem.name}
      </MenuItem>
    );
  }

  return (
    <>
      <Tabs value={navChoice} onChange={handleNavChange} className={classes.tabContainer} indicatorColor="primary">
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

      <Button variant="contained" color="secondary" className={classes.freeEstimate} component={Link} to="/estimate">
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
        {servicesMenuItems.map((menuItem, index) => renderServicesSubMenu(menuItem, index))}
      </Menu>
    </>
  );
};

export default TabMenuBar;
