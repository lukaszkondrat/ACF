import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../../services/apiCountries";

export function useGetCountries() {
  const { data: countries, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  return { countries, isLoading };
}
