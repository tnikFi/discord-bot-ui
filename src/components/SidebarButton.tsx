import React from 'react';
import PropTypes from 'prop-types';
import styles from './SidebarButton.module.css';

const SidebarButton = ({ icon, label }: {icon: string, label: string}) => {
    return (
        <button className={styles.sidebarButton}>
            <span className='material-symbols-outlined'>{icon}</span>
            <span className={styles.buttonLabel}>{label}</span>
        </button>
    );
};

SidebarButton.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default SidebarButton;