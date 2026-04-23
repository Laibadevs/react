import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return(
        <div className={styles.header}>
            this is header
            <button className={styles["h-btn"]}>Sign Up</button>
        </div>
    )
}

export default Header