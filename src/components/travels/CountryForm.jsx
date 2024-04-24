import { useNavigate } from "react-router-dom";

import Map from "./Map";
import Button from "../ui/Button";
import ButtonBack from "../ui/ButtonBack";

import styles from "./CountryForm.module.css";

function CountryForm({
  isEditing,
  handleSubmit,
  country,
  setCountry,
  clearAllPlaces,
  allPlaces,
}) {
  const navigate = useNavigate();
  return (
    <div className={styles.box}>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <ul>
            <li className={styles.item}>
              <label htmlFor="name">Country:</label>
              <input
                type="text"
                id="name"
                placeholder="Country name"
                defaultValue={country?.name}
                onChange={(e) =>
                  setCountry({ ...country, name: e.target.value })
                }
                required
              />
            </li>
            <li className={styles.item}>
              <label htmlFor="flag">Flag:</label>
              <input
                type="text"
                id="flag"
                placeholder="Country flag"
                value={country?.flag}
                onChange={(e) =>
                  setCountry({ ...country, flag: e.target.value })
                }
                required
              />
            </li>
            <li className={styles.item}>
              <Button
                type="button"
                btnWidth="15%"
                onClick={() => clearAllPlaces()}
              >
                clear
              </Button>
              <span>
                <textarea
                  id="places"
                  placeholder="To add visited places start clicking on the map"
                  rows="2"
                  cols="4"
                  defaultValue={allPlaces?.map((place) => place.name)}
                  disabled
                />
                {allPlaces.length === 0 ? (
                  <p className={styles.warning}>
                    This area cannot be left empty
                  </p>
                ) : null}
              </span>
            </li>
            <li className={styles.item}>
              <label htmlFor="days">Days:</label>
              <input
                type="number"
                id="days"
                placeholder="Days"
                min="0"
                value={country?.days}
                onChange={(e) =>
                  setCountry({ ...country, days: +e.target.value })
                }
                required
              />
            </li>
            <li className={styles.item}>
              <label htmlFor="food">Food to try:</label>
              <input
                type="text"
                id="food"
                placeholder="Food to try"
                value={country?.food}
                onChange={(e) =>
                  setCountry({
                    ...country,
                    food: e.target.value.split(","),
                  })
                }
                required
              />
            </li>
            <li className={styles.item}>
              <label htmlFor="tips">Best tips:</label>
              <input
                type="text"
                id="tips"
                placeholder="Best tips"
                value={country?.tips}
                onChange={(e) =>
                  setCountry({
                    ...country,
                    tips: e.target.value.split(","),
                  })
                }
                required
              />
            </li>
            <li className={styles.item}>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                placeholder="Short description of the trip"
                rows="5"
                cols="10"
                value={country?.description}
                onChange={(e) =>
                  setCountry({
                    ...country,
                    description: e.target.value,
                  })
                }
                required
              />
            </li>
            <li className={styles.item}>
              <label htmlFor="eats">Places to eat:</label>
              <input
                type="text"
                id="eats"
                placeholder="Restaurants/cafes"
                value={country?.eats}
                onChange={(e) =>
                  setCountry({
                    ...country,
                    eats: e.target.value.split(","),
                  })
                }
              />
            </li>
          </ul>
          <div className={styles.buttons}>
            <ButtonBack
              text="BACK"
              onClick={() => {
                clearAllPlaces();
                navigate("/travels");
              }}
            />
            <Button btnWidth="40%" type="submit">
              {isEditing ? "UPDATE COUNTRY" : "ADD NEW COUNTRY"}
            </Button>
          </div>
        </form>
      </div>
      <div className={styles.mapContainer}>
        <Map country={undefined} zoom={4} clickable={true} />
      </div>
    </div>
  );
}

export default CountryForm;
