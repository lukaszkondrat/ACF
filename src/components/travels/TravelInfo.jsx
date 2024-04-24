import styles from "./TravelInfo.module.css";

function TravelInfo() {
  return (
    <>
      <div className={styles.text}>
        <span className={styles.important}>
          We have visited over 50 countries in the world.
        </span>
        <br /> Most of them were discovered by us indepentently, without the use
        of any travel agencies - which means we know how to organise an awesome
        trip by ourselves!
        <br />
        It is not that hard and it is, in our opinion, the best way of exploring
        this wonderful world we live in. But what you need is a lot of
        preparation not to get surprised, scammed or lost while in a foreign
        country. <br /> We try to be thoroughly prepared every time and that is
        why every trip is an unforgettable and joyful experience!
        <br /> Do you want to know how we do it?
        <br />
        <span className={styles.important}>
          Search for a country that you are interested in and learn more about
          our most important tips about that place.
        </span>
      </div>
    </>
  );
}

export default TravelInfo;
