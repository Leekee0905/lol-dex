import ChampionDetail from "@/components/detail/ChampionDetail";
import { ChampionDetailResponseType } from "@/types/championType";
import { getChampionDetail } from "@/utils/serverApi";

export const dynamic = "force-dynamic";

interface ParamsType {
  name: string;
}

const ChampionDetailPage = async ({ params }: { params: ParamsType }) => {
  const data: ChampionDetailResponseType = await getChampionDetail(params.name);
  return (
    <div className="container">
      <ChampionDetail data={data} />
    </div>
  );
};

export default ChampionDetailPage;
