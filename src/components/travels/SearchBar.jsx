import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "../auth/useUser";

import CountryCard from "./CountryCard";
import Button from "../ui/Button";

import styles from "./SearchBar.module.css";

function SearchBar({ allCountries }) {
  const [countries, setCountries] = useState(allCountries);
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();

  function handleSearch(e) {
    e.preventDefault();
    const results = allCountries.filter((country) =>
      country.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCountries(results);
  }

  countries.sort((a, b) => {
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();
    if (name1 < name2) {
      return -1;
    }
    if (name1 > name2) {
      return 1;
    }
    return 0;
  });

  return (
    <div className={styles.search}>
      <div className={styles.inputs}>
        <input
          type="text"
          placeholder="Search for the country..."
          onChange={handleSearch}
          value={countries.name}
        />
        {isAuthenticated ? (
          <Button onClick={() => navigate("/add")}>Add new</Button>
        ) : null}
      </div>

      <div className={styles.countriesBox}>
        {countries?.map((country) => (
          <CountryCard country={country} key={country.name} />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
