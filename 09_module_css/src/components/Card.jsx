import React from 'react'
import styles from './Card.module.css'
const Card = () => {
    return (
        <div className={styles.card}>
            <h1 className={styles.heading}>this card heading</h1>
            <p className={styles.description}>this is card para1</p>
            <a className={styles.btn} href='#'>get more</a>
        </div>
    )
}

export default Card
