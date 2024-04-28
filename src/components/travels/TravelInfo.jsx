import styles from "./TravelInfo.module.css";

function TravelInfo() {
  return (
    <div className={styles.text}>
      <span className={styles.important}>
        So far, we have visited over 50 countries in the world.
      </span>
      <br /> Most of them were discovered by us indepentently, without using any
      travel agencies - which means we know how to organise an awesome trip by
      ourselves!
      <br />
      It is not that hard and it is, in our opinion, the best way of exploring
      this wonderful world we live in. But what you need is a lot of preparation
      not to get surprised, scammed or lost while in a foreign country. <br />{" "}
      We try to be thoroughly prepared every time and that is why every trip is
      an unforgettable and joyful experience!
      <br /> Do you want to know how we do it? Are you looking for inspiration
      on which places it is best to see in your next travel destination?
      <br />
      <span className={styles.important}>
        Search for a country that you are interested in and learn more about how
        we did it!
      </span>
    </div>
  );
}

export default TravelInfo;
