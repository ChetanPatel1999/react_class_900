import React from 'react'
import styles from './Button.module.css'
const Button = () => {
    console.log(styles)
    return (
        <button className={styles.btn} >click me!</button>
    )
}

export default Button
