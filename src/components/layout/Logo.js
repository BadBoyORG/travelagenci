import styles from './Logo.module.css'

function Logo() {
  return (
    <div className={styles.container}>
      <span id="logoname" className={styles.logoname}>
        Travelline
      </span>
      <div id="polygon1" className={styles.polygon1} />
      <div id="polygon2" className={styles.polygon2} />
      <div id="polygon3" className={styles.polygon3} />
      <div id="polygon4" className={styles.polygon4} />
    </div>
  )
}

export default Logo
