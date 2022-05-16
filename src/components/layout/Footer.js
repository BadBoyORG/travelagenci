import styles from './Footer.module.css'

import Logo from './Logo'

function Footer() {
  return (
    <div id="footer" className={styles.container}>
      <div className={styles.row_gap}>
        <Logo />
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
          <span id="span1">Careers</span>
          <span id="span2">|</span>
          <span id="span3">Privacy Policy</span>
          <span id="span4">|</span>
          <span id="span5">Terms & Conditions</span>
        </div>
        <span id="span6">© 2022 BadBoyORG. </span>
      </div>
    </div>
  )
}

export default Footer
