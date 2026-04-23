import React from 'react'
import styles from './Button.module.css'

const Button = () => {
    return(
        <div className={styles.b}>
          <button className={styles.btn}>Login</button>
        </div>
    )
}

export default Button