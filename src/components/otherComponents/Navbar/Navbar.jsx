import React from 'react'
import styles from "./Navbar.module.css"
function Navbar() {
  return (
    <nav className={styles.navbar}>
    <ul className={styles.nav}></ul>
    </nav>
  )
}
function NavItem(){
  return(
    <li className={styles.item}></li>
  )
}

export default Navbar
