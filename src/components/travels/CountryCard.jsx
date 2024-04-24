import { useNavigate } from "react-router-dom";

import styles from "./CountryCard.module.css";

function CountryCard({ country }) {
  const navigate = useNavigate();
  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/travels/${country.id}`)}
    >
      {country.flag} {country.name}
    </div>
  );
}

export default CountryCard;
