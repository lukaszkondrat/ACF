import styles from "./ContactInfo.module.css";

function ContactInfo() {
  return (
    <div>
      If you would like to discover further details of our trips, know more
      about our squash coaching sessions, or perhaps you like our website and
      would want a similar one - feel free to reach out to us on:
      <br />
      <span className={styles.highlight}> action.cures@gmail.com</span>
      <br />
      Also, in the meantime, check out some photos on Instagram:
      <br />
      <a
        href="https://www.instagram.com/acf_info/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/instagram.svg" alt="instagram logo" width="60rem" />
      </a>
    </div>
  );
}

export default ContactInfo;
