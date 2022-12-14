import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles'

const Navbar = ({totalItems}) => {
    const classes = useStyles()
    const location = useLocation()
  return (
    <>
    <AppBar position='fixed' className={classes.AppBar} color='inherit'>
        <Toolbar>
            <Typography component={Link} to='/' variant='h5' className={classes.title} color='inherit'>
                VINTAGE
                
            </Typography>
            <div className={classes.grow}/>
            {location.pathname == '/' && (
            <div className={classes.button} style={{display:'flex', alignItems:'center'}}>
                
            <IconButton component={Link} to='/cart' aria-label='show cart items' color='inherit'>
                <Badge badgeContent={totalItems} color='secondary'>
                    <ShoppingCart/>
                </Badge>
            </IconButton>
            </div> )}
        </Toolbar>
    </AppBar>
    
    </>
  )
}

export default Navbar