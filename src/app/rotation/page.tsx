"use client";
import ChampionCard from "@/components/ChampionCard";
import useGetRotationQuery from "@/hooks/queries/useGetRotationQuery";
import { ChampionType } from "@/types/championType";
import Loading from "../loading";

const RotationPage = () => {
  const { data: rotationChampions, isLoading } = useGetRotationQuery();
  if (isLoading) return <Loading />;

  return (
    <div className="container mt-10">
      <h1 className="text-[#ff5555] font-bold">챔피언 로테이션</h1>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-5">
        {rotationChampions.map((champion: ChampionType) => {
          return <ChampionCard key={champion.id} data={champion} />;
        })}
      </div>
    </div>
  );
};

export default RotationPage;
