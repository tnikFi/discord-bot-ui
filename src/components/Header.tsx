import React, { MouseEvent, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { MobileContext, MobileMenuContext } from '../App';
import { ThemeProvider } from '@emotion/react';
import { Stack, AppBar, Toolbar, Typography, Box, IconButton, Tooltip, Avatar, Menu, MenuItem } from '@mui/material';
import Sidebar from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router-dom';

const Header = ({ handleDrawerToggle }: { handleDrawerToggle: React.MouseEventHandler }) => {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    let location = useLocation();
    let locationName = location.pathname[1].toUpperCase() + location.pathname.slice(2);

    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

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
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    {locationName}
                </Typography>
                <Box sx={{ flexGrow: 0 }}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Tooltip title={window.localStorage.getItem('username') || 'User'}>
                            <Avatar src={window.localStorage.getItem('avatar') || ''} />
                        </Tooltip>
                    </IconButton>
                    <Menu
                        sx={{ mt: '45px' }}
                        id='menu-appbar'
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem onClick={handleCloseUserMenu}>
                            <Typography variant='body1' sx={{ flexGrow: 1 }}>
                                Logout
                            </Typography>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    handleDrawerToggle: PropTypes.func.isRequired,
};

export default Header;