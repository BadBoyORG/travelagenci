import styles from './About.module.css'

import { ImWindows, ImUsers } from 'react-icons/im'
import { AiFillStar, AiFillLike } from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'

import Container from '../layout/Container'
import OurTeamImg from '../layout/OurTeamImg'
import Card from '../layout/Card'

function About() {
  return (
    <Container id="about">
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
        <div className={`${styles.relativePosition} ${styles.startRow}`}>
          <OurTeamImg />
          <div>
            <h2>
              Our <span>team is the secret</span> to our success
            </h2>
            <div>
              <div className={styles.row}>
                <i className={styles.iconStyle}>
                  <ImWindows />
                </i>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className={styles.row}>
                <i className={styles.iconStyle}>
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
        <h2 className={styles.marginPosition}>
          <span>Why</span> Choose Us
        </h2>
        <p className={styles.centerP}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className={styles.row}>
          <Card
            icon={<AiFillStar />}
            customColor="red"
            name="Handpicked Hotels"
            description="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
          />
          <Card
            icon={<BiWorld />}
            customColor="yellow"
            name="World Class Service"
            description="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor."
          />
          <Card
            icon={<AiFillLike />}
            customColor="brown"
            name="Best Price Guarantee"
            description="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
          />
        </div>
      </div>
    </Container>
  )
}

export default About
