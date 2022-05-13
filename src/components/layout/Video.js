import styles from './Video.module.css'

import PlayButton from './PlayButton'

function Video(props) {
  return (
    <div className={styles.container}>
      <img src={props.img} />
      <div className={styles.red}></div>
      <div className={styles.yellow}></div>
      <a href="#">
        <PlayButton className={styles.absolute} />
      </a>
    </div>
  )
}

export default Video
