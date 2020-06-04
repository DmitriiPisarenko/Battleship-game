import React from 'react';
import styles from './sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.ship}>
        <div className={styles.deck} />
      </div>
      <div className={styles.ship}>
        <div className={styles.deck} />
        <div className={styles.deck} />
      </div>
      <div className={styles.ship}>
        <div className={styles.deck} />
        <div className={styles.deck} />
        <div className={styles.deck} />
      </div>
      <div className={styles.ship}>
        <div className={styles.deck} />
        <div className={styles.deck} />
        <div className={styles.deck} />
        <div className={styles.deck} />
      </div>
    </div>
  );
}
