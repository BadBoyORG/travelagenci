import styles from './PlayButton.module.css'

import { FaPlay } from 'react-icons/fa'

function PlayButton(props) {
  return (
    <form method="get" action={props.to}>
      <button className={`${styles.btn} ${props.className}`} type="submit">
        <i>
          <FaPlay />
        </i>
      </button>
    </form>
  )
}

export default PlayButton
