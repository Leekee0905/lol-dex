import axios from "axios";

export const riotApi = axios.create({
  baseURL: "https://ddragon.leagueoflegends.com",
  headers: {
    "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY,
  },
});

export const rotationApi = axios.create({
  baseURL: "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
  headers: {
    "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY,
  },
});
