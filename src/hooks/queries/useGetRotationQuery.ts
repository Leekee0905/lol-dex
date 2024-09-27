import { getRotationChampions } from "@/utils/rotationApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useGetRotationQuery = () => {
  const queryClient = useQueryClient();
  const version: string = queryClient.getQueryData(["version"])!;
  return useQuery({
    queryKey: ["rotation"],
    queryFn: () => getRotationChampions(version),
  });
};

export default useGetRotationQuery;
