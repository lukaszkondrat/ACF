import React, { useState } from "react";

const PlacesContext = React.createContext({
  coordinates: [],
  allPlaces: [],
  addNewCoordinates: () => {},
  addNewPlace: () => {},
  clearAllPlaces: () => {},
});

export const PlacesContextProvider = ({ children }) => {
  const [allPlaces, setAllPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState([]);

  const addNewPlace = (newPlace) => {
    setAllPlaces((prev) => [...prev, newPlace]);
  };

  const addNewCoordinates = (newCoordinates) => {
    setCoordinates((prev) => [...prev, newCoordinates]);
  };

  const clearAllPlaces = () => {
    setAllPlaces([]);
  };

  const context = {
    coordinates,
    allPlaces,
    addNewPlace,
    addNewCoordinates,
    clearAllPlaces,
  };

  return (
    <PlacesContext.Provider value={context}>{children}</PlacesContext.Provider>
  );
};

export default PlacesContext;
