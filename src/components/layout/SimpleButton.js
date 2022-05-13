import styles from './SimpleButton.module.css'

function SimpleButton(props) {
  return (
    <button className={`${styles.btn} ${styles[props.customSize]}`} {...props}>
      {props.children}
    </button>
  )
}

export default SimpleButton
