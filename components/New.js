import React from 'react'
import styles from '../styles/New.module.css';

export default function New({singleNew}) {
    return (
        <div className={styles['new-box']}>
            <div className={styles.head}>
                <div className={styles.image}><img src={singleNew.source.url} /></div>
                <div className={styles.title}>{singleNew.source.title}</div>
            </div>
            <div className={styles['news-title']}>{singleNew.title}</div>
            <div className={styles.date}>{singleNew.date}</div>
            <div className={styles.seperator}></div>
            <ul className={styles.keywords}>
                {singleNew.keywords.map((keyword, i) => (<li key={i}>{keyword.name}</li>))}
            </ul>
            
        </div>
    )
}
