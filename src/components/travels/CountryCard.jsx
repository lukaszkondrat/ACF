import { useNavigate } from "react-router-dom";

import styles from "./CountryCard.module.css";

function CountryCard({ country }) {
  const navigate = useNavigate();
  return (
    <div
      className={styles.card}
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        navigate(`/travels/${country.id}`);
      }}
    >
      {country.flag} {country.name}
    </div>
  );
}

export default CountryCard;
