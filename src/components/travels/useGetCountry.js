import { useQuery } from "@tanstack/react-query";
import { getSingleCountry } from "../../services/apiCountries";

export function useGetCountry(id) {
  console.log(id);
  const { data: country, isLoading } = useQuery({
    queryFn: () => getSingleCountry(id),
    queryKey: ["countries"],
  });

  return { country, isLoading };
}
