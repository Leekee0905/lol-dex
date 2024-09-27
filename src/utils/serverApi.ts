import { riotServerApi } from "./apiIntsance";

export const getLatestVersion = async () => {
  const response = await riotServerApi.get("/api/versions.json");
  return response.data[0];
};

export const getThumbnailChampionList = async (version: string) => {
  const response = await riotServerApi.get(
    `/cdn/${version}/data/ko_KR/champion.json`
  );
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
