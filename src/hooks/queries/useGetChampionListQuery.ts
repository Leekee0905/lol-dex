import { getChampionsList } from "@/utils/ddragonApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetChampionListQuery = () => {
  const queryClient = useQueryClient();
  const version: string = queryClient.getQueryData(["version"])!;
  return useQuery({
    queryKey: ["championList"],
    queryFn: () => getChampionsList(version),
    enabled: !!version,
    staleTime: 3000,
  });
};

export default useGetChampionListQuery;
