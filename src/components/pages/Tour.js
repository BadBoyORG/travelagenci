import styles from './Tour.module.css'

import beijing from '../../img/beijing.png'
import turkey from '../../img/turkey.png'
import pakistan from '../../img/pakistan.png'
import domesticTrip from '../../img/pngwing2.png'
import internationalTrip from '../../img/pngwing1.png'

import Container from '../layout/Container'
import Image from '../layout/Image'
import CardTrip from '../layout/CardTrip'

function Tour() {
  return (
    <Container>
      <div className={styles.container}>
        <h2>
          <span>Check Our Best</span> Promotional Tour
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className={styles.startRow}>
          <Image img={beijing} name="Beijing" />
          <Image img={turkey} name="Turkey" />
          <Image img={pakistan} name="Pakistan" />
        </div>
        <h2>
          <span>Globally</span> Accepted
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className={styles.startRow}>
          <CardTrip img={domesticTrip} name="For Domestic" />
          <CardTrip img={internationalTrip} name="For International" />
        </div>
      </div>
    </Container>
  )
}

export default Tour
