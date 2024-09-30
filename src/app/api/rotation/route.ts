import { ChampionListType } from "@/types/championType";
import { rotationApi } from "@/utils/clientApi";
import { getChampionsList } from "@/utils/serverApi";

import { NextResponse } from "next/server";

export const GET = async () => {
  const allChampionList: ChampionListType = await getChampionsList();
  const rotationData: number[] = await rotationApi();

  const allChampions = Object.values(allChampionList);

  const championMap = new Map(
    allChampions.map((champion) => [Number(champion.key), champion])
  );
  const rotationChampions = rotationData.map((element: number) =>
    championMap.get(element)
  );

  return NextResponse.json(rotationChampions);
};
