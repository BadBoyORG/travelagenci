import styles from './OurTeamImg.module.css'

import people1 from '../../img/people1.png'
import people2 from '../../img/people2.png'
import people3 from '../../img/people3.png'
import people4 from '../../img/people4.png'
import people5 from '../../img/people5.png'

function OurTeamImg() {
  return (
    <div classname={styles.container}>
      <div className={styles.browser}>
        <div className={styles.bar}></div>
        <div className={styles.red}></div>
        <div className={styles.yellow}></div>
        <div className={styles.brown}></div>
      </div>
      <div>
        <div className={styles.ballRed}></div>
        <div className={styles.ballGray}></div>
        <div className={styles.ballYellow}></div>
        <div className={styles.ballRedSmall}></div>
      </div>
      <img className={`${styles.img} ${styles.people1}`} src={people1} />
      <img className={`${styles.img} ${styles.people2}`} src={people2} />
      <img className={`${styles.img} ${styles.people3}`} src={people3} />
      <img className={`${styles.img} ${styles.people4}`} src={people4} />
      <img className={`${styles.img} ${styles.people5}`} src={people5} />
    </div>
  )
}

export default OurTeamImg
