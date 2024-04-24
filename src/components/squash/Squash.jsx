import { useReducer } from "react";

import PhotoBox from "./PhotoBox";
import SquashInfoEN from "./SquashInfoEN";
import SquashInfoPL from "./SquashInfoPL";

import styles from "./Squash.module.css";

function reducer(state, action) {
  switch (action.type) {
    case "click_warsaw":
      return { clickedLondon: !state.clickedLondon };
    case "click_london":
      return { clickedWarsaw: !state.clickedWarsaw };
    default:
      throw new Error("There has been an error");
  }
}

function Squash() {
  const [state, dispatch] = useReducer(reducer, {
    clickedLondon: false,
    clickedWarsaw: false,
  });
  return (
    <div className={styles.container}>
      <div className={styles.photos}>
        {!state.clickedLondon ? (
          <PhotoBox cityName="london" emoji="🇬🇧" dispatch={dispatch} />
        ) : (
          <SquashInfoPL />
        )}
        {!state.clickedWarsaw ? (
          <PhotoBox cityName="warsaw" emoji="🇵🇱" dispatch={dispatch} />
        ) : (
          <SquashInfoEN />
        )}
      </div>
    </div>
  );
}

export default Squash;
