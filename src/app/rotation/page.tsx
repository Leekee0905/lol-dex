"use client";
import ChampionCard from "@/components/ChampionCard";
import useGetRotationQuery from "@/hooks/queries/useGetRotationQuery";
import { useQueryClient } from "@tanstack/react-query";

const RotationPage = () => {
  const { data: rotationChampions, isLoading } = useGetRotationQuery();
  if (isLoading) return <div>loading...</div>;
  console.log(rotationChampions);
  return (
    <div>
      <h1 className="text-[#ff5555] font-bold">챔피언 로테이션</h1>
      <div className="container grid grid-cols-5 gap-5">
        {rotationChampions.map((champion) => {
          return <ChampionCard key={champion.id} data={champion} />;
        })}
      </div>
    </div>
  );
};

export default RotationPage;
