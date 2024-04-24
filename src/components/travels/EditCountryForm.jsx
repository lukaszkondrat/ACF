import { useContext, useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";

import { useGetCountries } from "./useGetCountries";
import { updateCountry } from "../../services/apiCountries";
import { API_URL, API_KEY } from "../../constants";

import toast from "react-hot-toast";

import PlacesContext from "../../store/places-context";
import CountryForm from "./CountryForm";

function EditCountryForm() {
  const { countryId } = useParams();
  const { countries } = useGetCountries();
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const [editedCountry, setEditedCountry] = useState({});

  const { coordinates, addNewPlace, allPlaces, clearAllPlaces } =
    useContext(PlacesContext);

  useEffect(
    function () {
      setEditedCountry(
        countries?.filter((country) => country.id === +countryId)[0]
      );
    },
    [countries, countryId]
  );

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
    mutationFn: ({ allPlaces, id }) => {
      updateCountry(
        {
          ...editedCountry,
          places: allPlaces,
        },
        id
      );
    },
    onSuccess: () => {
      toast.success("A country has been successfully updated!");
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
    mutate({ allPlaces, id: +countryId });
  }

  return (
    <CountryForm
      isEditing={Boolean(countryId)}
      handleSubmit={handleSubmit}
      country={editedCountry}
      setCountry={setEditedCountry}
      clearAllPlaces={clearAllPlaces}
      allPlaces={allPlaces}
    />
  );
}
export default EditCountryForm;
