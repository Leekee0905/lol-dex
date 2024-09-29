import { riotApi } from "./apiIntsance";

export const getLatestVersion = async () => {
  const response = await riotApi.get("/api/versions.json");
  return response.data[0];
};

export const getThumbnailChampionList = async (version: string) => {
  const response = await riotApi.get(`/cdn/${version}/data/ko_KR/champion.json`);
  const sliceChamipons = (count: number) => {
    const dataKeys = Object.keys(response.data.data).slice(0, count);
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(response.data.data[dataKeys[i]]);
    }
    return result;
  };
  return sliceChamipons(3);
};

export const getChampionsList = async (version: string) => {
  const response = await riotApi.get(`/cdn/${version}/data/ko_KR/champion.json`);
  console.log(version);
  return response.data;
};

export const getChampionDetail = async (version: string, id: number) => {
  const response = await riotApi.get(`/cdn/${version}/data/ko_KR/champion/${id}.json`);
  return response.data;
};
