import styles from './PlayButton.module.css'

import { FaPlay } from 'react-icons/fa'

function PlayButton({ className, ...rest }) {
  return (
    <button className={`${styles.btn} ${className}`} {...rest}>
      <i>
        <FaPlay />
      </i>
    </button>
  )
}

export default PlayButton
