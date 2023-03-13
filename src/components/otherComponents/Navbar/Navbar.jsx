import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Navbar.module.css"
import { Navigate, useNavigate,Link } from 'react-router-dom'
function Navbar() {
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
  return (
    <div className={styles.bodyy}>
    <nav className={navbar}>
      <div className={containerFluid}>
        {/* <a className={styles.navbar_brand} href="#"> Abstrato</a> */}
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
            <Link to="/Community" className={styles.nav_link}>Community</Link>
            </li>
            <li className={navitem}>
            <Link to="/Blog" className={styles.nav_link}>Blog</Link>
            </li>
            <li className={navitem}>
              <Link to="/Register" className={styles.nav_link}>Register here</Link>
            </li>
            <li className={navitem}>
            <Link to="/ResumeBuilder" className={styles.nav_link}>Create Resume</Link>
            </li>
          </ul>
          <span className={navText}>
            <Link to="/Login" className={`${styles.navbtn} ${navbtnstyle}`}>Login</Link>
          </span>
        </div>
      </div>
    </nav>
  </div>
  )
}


export default Navbar
