import { rotationApi } from "@/utils/apiIntsance";
import { getChampionsList } from "@/utils/ddragonApi";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const version = searchParams.get("version")!;
  const rotationDataResponse = await rotationApi.get("/");
  const allChampionsResponse = await getChampionsList(version);
  const rotationData = rotationDataResponse.data.freeChampionIds;
  const allChampions = Object.values(allChampionsResponse.data);

  const championMap = new Map(
    allChampions.map((champion) => [Number(champion.key), champion])
  );
  const rotationChampions = rotationData.map((element: number) =>
    championMap.get(element)
  );

  return NextResponse.json(rotationChampions);
};
