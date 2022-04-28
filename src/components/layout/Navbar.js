import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.container}>
      <div>logo</div>
      <ul className={styles.nav_list}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Events">Events</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Blog">Blog</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
      <div>HandleColor</div>
    </nav>
  )
}

export default Navbar
