import styles from "./PhotoBox.module.css";

function PhotoBox({ cityName, emoji, dispatch }) {
  return (
    <div className={styles.city}>
      <img
        src={`${cityName}.jpg`}
        alt={`photo of ${cityName}`}
        id={cityName}
        onClick={() => {
          dispatch({ type: `click_${cityName}` });
        }}
      />
      <p className={styles.text}>
        {emoji}{" "}
        {cityName === "london"
          ? cityName.toUpperCase() + " COACHING"
          : "ZAJĘCIA W WARSZAWIE"}
      </p>
    </div>
  );
}

export default PhotoBox;
