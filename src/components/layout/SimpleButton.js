import styles from './SimpleButton.module.css'

function SimpleButton(props) {
  return (
    <form method="get" action={props.to}>
      <button
        className={`${styles.btn} ${styles[props.customSize]}`}
        type="submit"
      >
        {props.children}
      </button>
    </form>
  )
}

export default SimpleButton
