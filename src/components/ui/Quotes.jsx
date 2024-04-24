import styles from "./Quotes.module.css";

function Quotes({ quote }) {
  return (
    <div className={styles.btnbox}>
      <p className={styles.quote}>{quote.text}</p>
      <p className={styles.author}> - {quote.author}</p>
    </div>
  );
}

export default Quotes;
