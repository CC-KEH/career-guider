import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Welcome.module.css'
import frontimageSvg from '../../assets/homescreen_images/frontimage.svg';
import { Navigate, useNavigate,Link } from 'react-router-dom'
function Welcome() {
  const navitem = 'nav-item px-2';
  const navToggler = 'navbar-toggler';
  const navTogglerIcon = 'navbar-toggler-icon';
  const navbarNav = 'navbar-nav mx-auto mb-2 mb-lg-0';
  const navbarCollapse = 'collapse navbar-collapse';
  const navbar = 'navbar navbar-expand-lg bg-transparent py-2 px-5';
  const containerFluid = 'container-fluid';
  const active = 'active';
  const navbtnstyle = 'px-3 py-2 text-white';
  const navText = 'navbar-text';
  const sectionContainer = 'container p-5';
  const sectionContainerRow = 'row d-flex align-items-center';
  const sectionContainerCol = 'col-md-6';
  const pt = 'pt-3';
  
  return (
    <div className={styles.bodyy}>
    <nav className={navbar}>
      <div className={containerFluid}>
        <Link to="/" className={styles.navbar_brand}>Abstrato</Link>
        <button className={navToggler} type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className={navTogglerIcon} />
        </button>
        <div className={navbarCollapse} id="navbarText">
          <ul className={navbarNav}>
            <li className={navitem}>
              {/* <a className={`${styles.nav_link} active`}  aria-current="page" href="#">Home</a> */}
              <Link to="/" className={`${styles.nav_link} active`}>Home</Link>
            </li>
            <li className={navitem}>
            <Link to="/Register" className={styles.nav_link}>Community</Link>
            </li>
            <li className={navitem}>
            <Link to="/Register" className={styles.nav_link}>Blog</Link>
            </li>
            <li className={navitem}>
              <Link to="/Register" className={styles.nav_link}>Register here</Link>
            </li>
            <li className={navitem}>
            <Link to="/Register" className={styles.nav_link}>Create Resume</Link>
            </li>
          </ul>
          <span className={navText}>
            <Link to="/Login" className={`${styles.navbtn} ${navbtnstyle}`}>Login</Link>
          </span>
        </div>
      </div>
    </nav>
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
  )
}

export default Welcome
