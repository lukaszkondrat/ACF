import { useContext } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  GeoJSON,
} from "react-leaflet";

import mapData from "../../data/countries.json";

import PlacesContext from "../../store/places-context";

import styles from "./Map.module.css";

const startingMapPosition = [50, 20];

function Map({ country, zoom, clickable }) {
  const boundary = [];
  mapData.features.forEach((data) => {
    if (data.properties.ADMIN === country?.name.split("-")[0]) {
      boundary.push(data);
    }
  });
  return (
    <MapContainer
      center={country?.places[0]?.coordinates || startingMapPosition}
      zoom={zoom}
      scrollWheelZoom={true}
      className={styles.map}
    >
      <GeoJSON
        style={{
          fillColor: "none",
          color: "gray",
          weight: 3,
        }}
        data={boundary}
      />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
      />
      {country &&
        country.places?.map((place) => (
          <Marker position={place.coordinates} key={place.name}>
            <Popup>{place.name}</Popup>
          </Marker>
        ))}

      {clickable ? <DetectClick /> : null}
    </MapContainer>
  );
}

function DetectClick() {
  const { addNewCoordinates } = useContext(PlacesContext);
  useMapEvents({
    click: (e) => {
      addNewCoordinates({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });
}

export default Map;
