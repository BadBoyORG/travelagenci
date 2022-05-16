import styles from './Watch.module.css'

import tour from '../../img/tour_promotion.png'

import Container from '../layout/Container'
import Video from '../layout/Video'

function Watch() {
  return (
    <Container id="watch">
      <div className={styles.container}>
        <div className={styles.relativeposition}>
          <h2>
            <span>Watch,</span> our lattest tour
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the industry's <br />
            standard dummy text ever since the 1500s, when an <br /> unknown
            printer took a galley of type and scrambled it to <br /> make a type
            specimen book.
          </p>
          <a href="/">Learn more</a>
          <div className={styles.yellowMediumBall} />
          <div className={styles.yellowSmallBall} />
        </div>
        <div className={styles.relativeposition}>
          <Video img={tour} />
        </div>
      </div>
    </Container>
  )
}

export default Watch
