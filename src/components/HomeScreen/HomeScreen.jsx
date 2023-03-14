import React from 'react'
import NavbarIn from '../otherComponents/Navbar/NavbarIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './HomeScreen.module.css'
import frontimageSvg from '../../assets/homescreen_images/frontimage.svg';
import { Navigate, useNavigate,Link } from 'react-router-dom'

function HomeScreen() {
    const sectionContainer = 'container p-5';
    const sectionContainerRow = 'row d-flex align-items-center';
    const sectionContainerCol = 'col-md-6';
    const pt = 'pt-3';
    
    return (
    <div className={styles.bodyy}>
    <NavbarIn/>    
    <section>
      <div className={sectionContainer}>
        <div className={sectionContainerRow}>
          <div className={sectionContainerCol}>
            <div className={styles.herotext}>Unlock your <span className={styles.blue_text}>dream</span> job!</div>
            <div className={`${styles.herosub} ${pt}`}>
              Your dream job is within reach. Let us show you the path to get there.
            </div>
          </div>
          <div className={sectionContainerCol} data-aos="fade-up">
            <img src={frontimageSvg} className={`w-100`} alt="Front Image" />
          </div>
        </div>
      </div>
    </section>
    <div className={styles.pagetwo}>
    </div>
  </div>
    );
}

export default HomeScreen
