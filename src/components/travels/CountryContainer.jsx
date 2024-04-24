import styles from "./CountryContainer.module.css";

function CountryContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default CountryContainer;
