import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import constants from '../constants';
import { MobileContext, MobileMenuContext } from '../App';

const TopBar = () => {
    const { mobileMenuOpen, setMobileMenuOpen } = useContext(MobileMenuContext)
    const useMobileMenu = useContext(MobileContext);

    // Circle effect when clicking on the profile picture
    const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        const rect = event.currentTarget.getBoundingClientRect();
        const circle = document.createElement('div');
        circle.classList.add(styles.circle);
        circle.style.left = event.clientX - rect.left + event.currentTarget.offsetLeft - rect.width/2 + 'px';
        circle.style.top = event.clientY - rect.top + event.currentTarget.offsetTop - rect.height/2 + 'px';
        event.currentTarget.appendChild(circle);
        setTimeout(() => {
            circle.remove();
        }, 500);
    }

    // Handle opening and closing the mobile menu
    const handleMobileMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setMobileMenuOpen(!mobileMenuOpen);
    }

    return (
        <header className={styles.header}>
            {useMobileMenu ? <button className={styles.mobileMenuButton} onClick={handleMobileMenuClick}><span className="material-symbols-outlined">menu</span></button> : <img className={styles.logo} src='https://dummyimage.com/64x64.png' alt='logo'/>}
            <h1>Dashboard</h1>
            <button id={styles.profile} onClick={handleProfileClick}>
                <img className={styles.profile} src="https://ia803204.us.archive.org/4/items/discordprofilepictures/discordblue.png" alt="Profile picture" />
            </button>
        </header>
    );
};

TopBar.propTypes = {

};

export default TopBar;