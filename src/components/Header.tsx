import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import constants from '../constants';
import { MobileContext, MobileMenuContext } from '../App';
import { ThemeProvider } from '@emotion/react';
import { Stack, AppBar, Toolbar, Typography } from '@mui/material';
import Sidebar from './Sidebar';

const TopBar = () => {
    return (
        <Stack sx={{ flexDirection: { sx: 'row', md: 'column' } }}>
            <AppBar position='fixed' color='primary' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
        </Stack>
    );
};

TopBar.propTypes = {

};

export default TopBar;