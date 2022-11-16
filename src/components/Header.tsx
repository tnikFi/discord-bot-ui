import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const TopBar = () => {

    const HandleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
        // Click circle effect using the absolute position of the click
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

    return (
        <header className={styles.header}>
            <img className={styles.logo} src='https://dummyimage.com/64x64.png' alt='logo'/>
            <h1>Dashboard</h1>
            <button id={styles.profile} onClick={HandleProfileClick}>
                <img className={styles.profile} src="https://ia803204.us.archive.org/4/items/discordprofilepictures/discordblue.png" alt="Profile picture" />
            </button>
        </header>
    );
};

TopBar.propTypes = {

};

export default TopBar;