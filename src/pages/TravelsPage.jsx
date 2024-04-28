import { useGetCountries } from "../components/travels/useGetCountries";

import { Spinner } from "react-bootstrap";

import Container from "../components/ui/Container";
import MainNav from "../components/nav/MainNav";
import TravelInfo from "../components/travels/TravelInfo";
import SearchBar from "../components/travels/SearchBar";
import Footer from "../components/ui/Footer";
import WorldMap from "../components/travels/WorldMap";

function TravelsPage() {
  const { countries, isLoading } = useGetCountries();

  return (
    <Container>
      <MainNav />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TravelInfo />
        <WorldMap />
      </div>
      {!isLoading ? <SearchBar allCountries={countries} /> : <Spinner />}
      <Footer />
    </Container>
  );
}

export default TravelsPage;
