import styles from './Card.module.css'

function Card(props) {
  return (
    <div className={styles.container}>
      <i className={`${styles.icon} ${styles[props.customColor]}`}>
        {props.icon}
      </i>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
