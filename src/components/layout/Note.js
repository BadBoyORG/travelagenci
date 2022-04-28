import styles from './Note.module.css'

function Note(props) {
  return (
    <div className={`${styles.note} ${styles[props.customPosition]}`}>
      <i
        className={`${styles.icon} ${styles[props.customSize]} ${
          styles[props.customClass]
        }`}
      >
        {props.icon}
      </i>
      <div>
        <h2>{props.name}</h2>
        <p>{props.info}</p>
        {props.button}
      </div>
    </div>
  )
}

export default Note
