import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deleteCountry as deleteCountryApi } from "../../services/apiCountries";
import { toast } from "react-hot-toast";

export function useDeleteCountry() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: deleteCountry, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteCountryApi(id),
    onSuccess: () => {
      toast.success("Country successfully deleted");
      navigate("/");
      queryClient.invalidateQueries({
        queryKey: ["countries"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteCountry, isDeleting };
}
