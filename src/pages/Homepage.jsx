import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.container}>
      <img src="logo.jpg" alt="company logo" />
      <div className={styles.text}>stay tuned for more... </div>
    </div>
  );
}

export default Homepage;
