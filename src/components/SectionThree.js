import React from 'react';
import styles from './SectionThree.module.scss';

export default function SectionThree() {
  return (
    <div>
      <h2>Our Pricing</h2>
      <div className={styles.item_container}>
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
      </div>
    </div>
  );
}
