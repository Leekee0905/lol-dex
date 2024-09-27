import axios from "axios";

export const getRotationChampions = async (version: string) => {
  const response = await axios.get("/api/rotation", {
    params: {
      version,
    },
  });
  return response.data;
};
