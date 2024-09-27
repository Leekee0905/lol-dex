import { getLatestVersion } from "@/utils/ddragonApi";
import { useQuery } from "@tanstack/react-query";

export const useGetVersionQuery = () => {
  return useQuery({
    queryKey: ["version"],
    queryFn: getLatestVersion,
  });
};
