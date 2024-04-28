import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCountries } from "../components/travels/useGetCountries";

import Spinner from "react-bootstrap/Spinner";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import CountryDetails from "../components/travels/CountryDetails";
import Map from "../components/travels/Map";

import styles from "./CountryPage.module.css";

function CountryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { countryId } = useParams();
  const navigate = useNavigate();
  const { countries, isLoading } = useGetCountries();

  function getMatchingCountry() {
    return countries?.filter((country) => country.id === +countryId)[0];
  }

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Button onClick={() => navigate("/travels")} btnWidth="100%">
            🧭 List of all countries
          </Button>

          <div className={styles.mapBox}>
            <Map country={getMatchingCountry()} zoom={6} clickable={false} />

            {countries ? (
              <CountryDetails country={getMatchingCountry()} />
            ) : (
              <p>Sorry, no countries found</p>
            )}
          </div>
        </>
      )}
    </Container>
  );
}

export default CountryPage;
