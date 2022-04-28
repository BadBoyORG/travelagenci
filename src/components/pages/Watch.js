import styles from './Watch.module.css'

import Container from '../layout/Container'

function Watch() {
  return (
    <Container>
      <div className={styles.container}>
        <div>
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
        </div>
        <div></div>
      </div>
    </Container>
  )
}

export default Watch
