import { useQuery } from "@tanstack/react-query";
import { getAllQuotes } from "../../services/apiQuotes";

export function useQuotes() {
  const { data: quotes, isLoading } = useQuery({
    queryFn: getAllQuotes,
    queryKey: ["quotes"],
  });

  return { quotes, isLoading };
}
