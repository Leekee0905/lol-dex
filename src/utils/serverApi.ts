"use server";

import {
  ChampionDetailResponseType,
  ChampionListResponseType,
} from "@/types/championType";

export const getChampionsList = async () => {
  const versionResponse = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/api/versions.json`,
    {
      method: "GET",
      headers: {
        "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY || "",
      },
    }
  );
  const version: string[] = await versionResponse.json();

  const championListResponse = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${version[0]}/data/ko_KR/champion.json`,
    {
      method: "GET",
      headers: {
        "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY || "",
      },
    }
  );
  const championList: ChampionListResponseType =
    await championListResponse.json();
  return championList.data;
};

export const getChampionDetail = async (name: string) => {
  const versionResponse = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/api/versions.json`,
    {
      method: "GET",
      headers: {
        "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY || "",
      },
    }
  );
  const version: string[] = await versionResponse.json();
  const championDetailResponse = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${version[0]}/data/ko_KR/champion/${name}.json`,
    {
      method: "GET",
      headers: {
        "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY || "",
        "Content-Type": "application/json",
      },
    }
  );
  const championDetail: ChampionDetailResponseType =
    await championDetailResponse.json();
  return championDetail;
};

export const getItems = async () => {
  const versionResponse = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/api/versions.json`,
    {
      method: "GET",
      headers: {
        "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY || "",
      },
    }
  );
  const version: string[] = await versionResponse.json();
  const itemsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${version[0]}/data/ko_KR/item.json`,
    {
      method: "GET",
      headers: {
        "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY || "",
        "Content-Type": "application/json",
      },
    }
  );
  const items = await itemsResponse.json();
  return items;
};
