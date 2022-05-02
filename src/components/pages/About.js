import styles from './About.module.css'

import { ImWindows, ImUsers } from 'react-icons/im'

import Container from '../layout/Container'
import OurTeamImg from '../layout/OurTeamImg'

function About() {
  return (
    <Container>
      <div className={styles.container}>
        <di className={styles.containerHeader}>
          <h2>
            <span>Our</span> Team
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </di>
        <div className={`${styles.relativeposition} ${styles.startRow}`}>
          <OurTeamImg />
          <div>
            <h2>
              Our <span>team is the secret</span> to our success
            </h2>
            <div>
              <div className={styles.row}>
                <i>
                  <ImWindows />
                </i>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className={styles.row}>
                <i>
                  <ImUsers />
                </i>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className={styles.marginposition}>
          <span>Why</span> Choose Us
        </h2>
        <p className={styles.centerP}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </Container>
  )
}

export default About
