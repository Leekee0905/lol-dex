import ChampionDetail from "@/components/detail/ChampionDetail";
import ChampionSkill from "@/components/detail/ChampionSkill";
import ChampionSkins from "@/components/detail/ChampionSkins";
import {
  ChampionDetailResponseType,
  ChampionDetailType,
} from "@/types/championType";
import { getChampionDetail } from "@/utils/serverApi";

export const dynamic = "force-dynamic";

interface ParamsType {
  name: string;
}
export function generateMetadata({ params }: { params: ParamsType }) {
  return {
    title: `Detail 페이지 : ${params.name}`,
    description: `Detail 페이지 : ${params.name}`,
  };
}

const ChampionDetailPage = async ({ params }: { params: ParamsType }) => {
  const data: ChampionDetailResponseType = await getChampionDetail(params.name);
  const championInfo: ChampionDetailType = Object.values(data.data)[0];
  return (
    <div
      className="w-full h-full flex flex-col items-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
        url(${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/img/champion/splash/${championInfo.id}_0.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center top 4em",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container my-10 text-white">
        <ChampionDetail data={championInfo} version={data.version} />
        <ChampionSkill data={championInfo} version={data.version} />
        <ChampionSkins
          skins={championInfo.skins}
          name={params.name}
          krName={championInfo.name}
        />
      </div>
    </div>
  );
};

export default ChampionDetailPage;
