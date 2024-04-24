import styles from "./ButtonBack.module.css";

function ButtonBack({ onClick, text = "" }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      &larr; {text}
    </button>
  );
}

export default ButtonBack;
