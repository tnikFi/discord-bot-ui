import { Box } from '@mui/material';
import React from 'react';
import styles from './Sidebar.module.css';
import SidebarButton from './SidebarButton';

const Sidebar = () => {
    const sidebarLinks = [
        {icon: 'team_dashboard', label: 'Dashboard'},
        {icon: 'settings', label: 'Settings'},
        {icon: 'history_edu', label: 'Logs'}
    ]

    return (
        <Box className={styles.sidebar} sx={{ flexDirection: { sx: 'row', md: 'column' }, height: '100%', padding: '0 2em' }}>
            <nav>
                <ul>
                    {sidebarLinks.map((link, index) => (<li key={link.label}><SidebarButton icon={link.icon} label={link.label} /></li>))}
                </ul>
            </nav>
            <hr style={{width: '100%'}}/>
            <p>This is an unfinished project with a goal to create a Discord bot with an easy-to-use control panel</p>
        </Box>
    );
};

export default Sidebar;