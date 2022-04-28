import styles from './Video.module.css'

import PlayButton from './PlayButton'

function Video(props) {
  return (
    <div className={styles.container}>
      <img src={props.img} />
      <div className={styles.red}></div>
      <div className={styles.yellow}></div>
      <PlayButton className={styles.absolute} />
    </div>
  )
}

export default Video
