import React from 'react'
import styles from './Chatscreen.module.css';
function Chatscreen() {
  return (
    <div>
        <div className={styles.container}>
          <div className={styles.tools}>
            <div className={styles.box}>
              <span className={styles.red}></span>
            </div>
            <div className={styles.box}>
              <span className={styles.yellow}></span>
            </div>
            <div className={styles.box}>
              <span className={styles.green}></span>
            </div>
          </div>
        <div className="card__content">
          Insert Content here
        </div>
    </div>

    </div>
  );
}

export default Chatscreen
