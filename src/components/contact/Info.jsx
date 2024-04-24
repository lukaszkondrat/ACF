import styles from "./Info.module.css";

function Info({ children }) {
  return <div className={styles.info}>{children}</div>;
}

export default Info;
