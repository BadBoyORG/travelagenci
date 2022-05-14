import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.row_gap}>
        logo
        <div>
          <p>Domestic</p>
          <p>International</p>
          <p>Tours</p>
        </div>
      </div>
      <div className={styles.column}>
        <h3>Subscribe to get our Newsletter</h3>
        <div>
          <form className={styles.row} method="GET" action="#">
            <input
              className={styles.input_email}
              id="email"
              type="email"
              placeholder="Your Email"
              size="30"
            />
            <input className={styles.btn} type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.gap}>
          <span>Careers</span>
          <span>|</span>
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Terms & Conditions</span>
        </div>
        <span>© 2021 Tourism Department. </span>
      </div>
    </div>
  )
}

export default Footer
