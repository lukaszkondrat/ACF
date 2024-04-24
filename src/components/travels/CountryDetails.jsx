import { useNavigate } from "react-router-dom";
import { useUser } from "../auth/useUser";
import { useDeleteCountry } from "./useDeleteCountry";

import Button from "../ui/Button";
import Card from "../ui/Card";

import styles from "./CountryDetails.module.css";

function CountryDetails({ country }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
  const { deleteCountry, isDeleting } = useDeleteCountry();
  return (
    <div className={styles.details}>
      <div className={styles.country}>
        <span>
          <span className={styles.flag}>{country.flag}</span>{" "}
          <span className={styles.name}>{country.name}</span>
        </span>
        {isAuthenticated ? (
          <span className={styles.buttons}>
            <Button
              onClick={() => navigate(`/edit/${country.id}`)}
              btnWidth="30%"
            >
              EDIT
            </Button>
            <Button
              onClick={() => deleteCountry(country.id)}
              btnWidth="15%"
              disabled={isDeleting}
            >
              X
            </Button>
          </span>
        ) : null}
      </div>

      <div className={styles.title}>Short description of our trip:</div>
      <div className={styles.description}>{country.description}</div>

      <div className={styles.places}>
        <span className={styles.title}>Places worth visiting: </span>
        {country.places?.map((place) => (
          <Card key={place.name}>
            <a
              href={`https://www.google.com/search?q=${place.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {place.name}
            </a>
          </Card>
        ))}
      </div>

      <div className={styles.days}>
        <span className={styles.title}>How much time we needed:</span>
        <span className={styles.highlight}>{country.days} days</span>
      </div>

      <div className={styles.title}>Important tips:</div>
      <ul className={styles.tips}>
        {country.tips?.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>

      <div className={styles.food}>
        <span className={styles.title}>Things worth trying:</span>
        {country.food?.map((food) => (
          <Card key={food}>
            <a
              href={`https://www.google.com/search?q=${food}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {food}
            </a>
          </Card>
        ))}
      </div>

      {country.eats.length !== 0 ? (
        <div className={styles.title}>Great places to eat/drink:</div>
      ) : null}
      <div className={styles.eats}>
        {country.eats?.map((eatery) => (
          <Card key={eatery}>
            <a href={eatery} target="_blank" rel="noopener noreferrer">
              {eatery.slice(8)}
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CountryDetails;
