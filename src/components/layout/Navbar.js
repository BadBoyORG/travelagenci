import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.container}>
      <div>logo</div>
      <ul className={styles.nav_list}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#tour">Events</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#home">Contact</a>
        </li>
      </ul>
      <div>HandleColor</div>
    </nav>
  )
}

export default Navbar
