import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/ecommerce.png';
import useStyles from './styles';

const PrimarySearchAppBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="Ecommerce" height="25px" className={classes.image} /> Ecommerce
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/product' && (
          <div className={classes.button}>
            <IconButton component={Link} to="/product" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PrimarySearchAppBar;
