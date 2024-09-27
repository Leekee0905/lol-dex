import ThumbnailList from "@/components/home/ThumbnailList";
import { getThumbnailChampionList, getLatestVersion } from "@/utils/serverApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const Home = async () => {
  const data = await getLatestVersion();
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["version"],
    queryFn: () => getLatestVersion(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["randomChampions"],
    queryFn: () => getThumbnailChampionList(data),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <h1 className="text-[#ff5555] font-bold">리그 오브 레전드 정보 앱</h1>
      <div className="container h-3/4 flex flex-col justify-center">
        <ul className="flex w-full justify-between items-center px-10 mt-10">
          <ThumbnailList />
        </ul>
      </div>
    </HydrationBoundary>
  );
};

export default Home;
