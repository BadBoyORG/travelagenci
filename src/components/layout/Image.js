import styles from './Image.module.css'

function Image(props) {
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      <img src={props.img} />
      <span>{props.name}</span>
    </div>
  )
}

export default Image
