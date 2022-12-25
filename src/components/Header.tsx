import React, { MouseEvent, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { MobileContext, MobileMenuContext } from '../App';
import { ThemeProvider } from '@emotion/react';
import { Stack, AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import Sidebar from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ handleDrawerToggle }: { handleDrawerToggle: React.MouseEventHandler }) => {
    return (
        <AppBar position='fixed' color='primary' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    handleDrawerToggle: PropTypes.func.isRequired,
};

export default Header;