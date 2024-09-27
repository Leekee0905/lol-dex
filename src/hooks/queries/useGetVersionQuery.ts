import { getLatestVersion } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";

export const useGetVersionQuery = () => {
  return useQuery({
    queryKey: ["version"],
    queryFn: getLatestVersion,
  });
};
