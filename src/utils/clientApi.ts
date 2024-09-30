import { RotationType } from "@/types/rotationType";

export const rotationApi = async () => {
  const response = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      method: "GET",
      headers: {
        "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY || "",
      },
      cache: "no-store",
    }
  );
  const data: RotationType = await response.json();
  return data.freeChampionIds;
};

export const getRotationRouteApi = async () => {
  const response = await fetch("/api/rotation", {
    method: "GET",
  });
  const data = await response.json();
  return data;
};
