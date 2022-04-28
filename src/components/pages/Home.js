import styles from './Home.module.css'

import { FaRegCalendarAlt, FaSuitcaseRolling } from 'react-icons/fa'

import travelnetwork from '../../img/travel_network.png'

import Container from '../layout/Container'
import SimpleButton from '../layout/SimpleButton'
import PlayButton from '../layout/PlayButton'
import Note from '../layout/Note'

function Home() {
  return (
    <div className={styles.home_container}>
      <Container>
        <div>
          <h1>
            <span>Life is a journey</span>, not a <br /> destination
          </h1>
          <p>
            Let's start your journey with us, your dream will <br /> come
            true...
          </p>
          <div className={styles.startRow}>
            <SimpleButton to="/Home">Explore Destinations</SimpleButton>
            <PlayButton to="Home" />
            <h3>Watch how it works</h3>
          </div>
        </div>
        <div className={styles.relativeposition}>
          <img src={travelnetwork} alt="Travel ilustration" />
          <Note
            customPosition="topRight"
            customClass="red"
            name="250 k"
            info="Plan your trip"
            icon={<FaRegCalendarAlt />}
          />
          <Note
            customPosition="bottomRight"
            customSize="medium"
            customClass="yellow"
            name="Upcoming Trips"
            info="Today at 12.00 PM"
            icon={<FaSuitcaseRolling />}
            button={
              <SimpleButton customSize="small" to="/Home">
                Join Now
              </SimpleButton>
            }
          />
        </div>
      </Container>
    </div>
  )
}

export default Home
