import styles from "./Footer.module.css";

function Footer() {
  const yearNow = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      © {yearNow} ACF. All rights reserved
    </footer>
  );
}

export default Footer;
