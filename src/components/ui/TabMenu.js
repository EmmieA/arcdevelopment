import React from 'react';
import { Link } from 'react-router-dom';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const TabMenuBar = ({
  classes,
  navChoice,
  handleNavChange,
  selectedNavChoice,
  navMenuIsOpen,
  handleCloseClick,
  handleOpenClick,
  handleMenuItemClick,
  setNavChoice,
  selectedMenuItem,
  servicesMenuItems,
}) => {
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
    </>
  );
};

export default TabMenuBar;
