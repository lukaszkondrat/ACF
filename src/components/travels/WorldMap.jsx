import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";

import { useGetCountries } from "./useGetCountries";

import mapData from "../../data/countries.json";

import styles from "./WorldMap.module.css";

const startingMapPosition = [30, 20];

function WorldMap() {
  const navigate = useNavigate();
  const { countries, isLoading } = useGetCountries();
  const visitedCountries = [];
  if (!isLoading) {
    const namesArray = countries
      .map((country) => country.name)
      .map((name) => name.split("-"));
    namesArray.forEach((name) => {
      mapData.features.forEach((data) => {
        if (data.properties.ADMIN === name[0]) {
          visitedCountries.push(data);
        }
      });
    });
  }

  return (
    <MapContainer
      className={styles.container}
      center={startingMapPosition}
      zoom={3}
      scrollWheelZoom={true}
    >
      {isLoading ? null : (
        <GeoJSON
          style={{
            fillColor: "green",
            fillOpacity: 0.4,
            color: "black",
            weight: 1,
          }}
          data={visitedCountries}
        />
      )}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
      />
      {countries &&
        countries?.map((country) => (
          <Marker
            position={country.places[0].coordinates}
            key={country.places[0].name}
          >
            <Popup>
              <div
                className={styles.popup}
                onClick={() => navigate(`/travels/${country.id}`)}
              >
                {country.name}
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}

export default WorldMap;
