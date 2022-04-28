import styles from './CardTrip.module.css'

import SimpleButton from './SimpleButton'

function CardTrip(props) {
  return (
    <div className={styles.container}>
      <img src={props.img} />
      <div className={styles.absolute}>
        <h4>{props.name}</h4>
        <SimpleButton
          to="/Home"
          customSize="transparent"
          children="Start trip today"
        />
      </div>
    </div>
  )
}

export default CardTrip
