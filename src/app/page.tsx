import ThumbnailList from "@/components/home/ThumbnailList";
import { ChampionType } from "@/types/championType";
import { getChampionsList } from "@/utils/serverApi";

const Home = async () => {
  const championList = await getChampionsList();
  const thumbnailList: ChampionType[] = Object.values(championList).slice(0, 3);

  return (
    <div className="my-10 flex flex-col gap-10 container">
      <h1 className="text-[#ff5555] font-bold">리그 오브 레전드 정보 앱</h1>
      <div className="container h-3/4 flex flex-col justify-center">
        <ul className="flex flex-col gap-10 w-full justify-between items-center px-10 mt-10">
          <ThumbnailList thumbnailList={thumbnailList} />
        </ul>
      </div>
    </div>
  );
};

export default Home;
