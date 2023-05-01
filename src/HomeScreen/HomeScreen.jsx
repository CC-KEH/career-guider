import React from 'react'
import styles from './HomeScreen.module.css'
import hiresvg from '../assets/resumebuilder_images/hire.svg'
import Navbar from '../components/Navbar/Navbar'
import ProgressBar from './ProgressBar'
function HomeScreen() {
  return (
    <>
    <Navbar/>
    <div className="hidden md:flex container mx-auto space-x-3 pt-20"></div>
    <div className={styles.header_container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Track your <span>Progress</span> here.
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={hiresvg} alt="Hire" />
      </div>
    </div>

    <div className={styles.container}>
      <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <ProgressBar/>
          </div>        
          <div className={styles.text}>
            Python
          </div>
      </div>
      <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <ProgressBar/>
          </div>        
          <div className={styles.text}>
            React
          </div>
      </div>
      <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <ProgressBar/>
          </div>        
          <div className={styles.text}>
            Html
          </div>
      </div>
    </div>
    </>
  )
}

export default HomeScreen
