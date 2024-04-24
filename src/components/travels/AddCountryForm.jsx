import { useContext, useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { addCountry } from "../../services/apiCountries";
import { API_KEY, API_URL } from "../../constants";

import toast from "react-hot-toast";

import PlacesContext from "../../store/places-context";
import CountryForm from "./CountryForm";

function AddCountryForm() {
  const navigate = useNavigate();
  const initialState = {
    name: "",
    flag: "",
    places: [],
    days: 0,
    food: [],
    tips: [],
    description: "",
    eats: [],
  };

  const [newCountry, setNewCountry] = useState(initialState);

  const queryClient = useQueryClient();

  const { coordinates, addNewPlace, allPlaces, clearAllPlaces } =
    useContext(PlacesContext);

  useEffect(
    function () {
      coordinates.slice(-1).forEach((coords) => {
        fetch(`${API_URL}lat=${coords.lat}&lon=${coords.lng}&apiKey=${API_KEY}`)
          .then((response) => response.json())
          .then((result) => {
            addNewPlace({
              name: result.features[0].properties.city,
              coordinates: [coords.lat, coords.lng],
            });
          });
      });
    },
    [coordinates]
  );

  const { mutate } = useMutation({
    mutationFn: (allPlaces) => {
      addCountry({
        ...newCountry,
        places: allPlaces,
      });
      setNewCountry(initialState);
    },
    onSuccess: () => {
      toast.success("A new country successfully added!");
      queryClient.invalidateQueries({
        queryKey: ["countries"],
      });
      clearAllPlaces();
      navigate("/travels");
    },
    onError: (err) => toast.error(err.message),
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (allPlaces.length === 0) return;
    mutate(allPlaces);
  }

  return (
    <CountryForm
      handleSubmit={handleSubmit}
      country={newCountry}
      setCountry={setNewCountry}
      clearAllPlaces={clearAllPlaces}
      allPlaces={allPlaces}
    />
  );
}
export default AddCountryForm;
