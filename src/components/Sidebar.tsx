import { Box } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { MobileMenuContext } from '../App';
import styles from './Sidebar.module.css';
import SidebarButton from './SidebarButton';

const Sidebar = () => {
    const { mobileMenuOpen, setMobileMenuOpen } = useContext(MobileMenuContext)

    const sidebarLinks = [
        {icon: 'team_dashboard', label: 'Dashboard'},
        {icon: 'settings', label: 'Settings'},
        {icon: 'history_edu', label: 'Logs'}
    ]

    return (
        <div className={`${styles.sidebar} ${mobileMenuOpen ? styles.hidden : ''}`} >
            <nav>
                <ul>
                    {sidebarLinks.map((link, index) => (<li key={link.label}><SidebarButton icon={link.icon} label={link.label} /></li>))}
                </ul>
            </nav>
            <hr style={{width: '100%'}}/>
            <p>This is an unfinished project with a goal to create a Discord bot with an easy-to-use control panel</p>
        </div>
    );
};

export default Sidebar;