import styles from './Container.module.css'

function Container(props) {
  return (
    <div
      id={props.id}
      className={`${styles.container} ${styles[props.customClass]}`}
    >
      {props.children}
    </div>
  )
}

export default Container
