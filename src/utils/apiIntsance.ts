import axios from "axios";

export const riotServerApi = axios.create({
  baseURL: "https://ddragon.leagueoflegends.com",
  params: {
    "X-Riot-Token": process.env.RIOT_API_KEY,
  },
});

export const riotClientApi = axios.create({
  baseURL: "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
  params: {
    "X-Riot-Token": process.env.RIOT_API_KEY,
  },
});
