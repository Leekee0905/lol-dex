import { getChampionDetail } from "@/utils/ddragonApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetChampionDetailQuery = (id: number) => {
  const queryClient = useQueryClient();
  const version: string = queryClient.getQueryData(["version"])!;
  return useQuery({
    queryKey: ["champion", id],
    queryFn: () => getChampionDetail(version, id),
  });
};
