import ChampionCard from "@/components/ChampionCard";
import { ChampionType } from "@/types/championType";
import { getChampionsList } from "@/utils/serverApi";

export const revalidate = 86400;

const ChampionsPage = async () => {
  const championList = await getChampionsList();
  const data: ChampionType[] = Object.values(championList);
  return (
    <div>
      <h1 className="text-[#ff5555] font-bold">챔피언 목록</h1>
      <div className="container grid grid-cols-5 gap-5 py-5">
        {data.map((champion: ChampionType) => {
          return <ChampionCard key={champion.id} data={champion} />;
        })}
      </div>
    </div>
  );
};

export default ChampionsPage;
