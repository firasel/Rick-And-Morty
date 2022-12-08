import API from "./AxiosInstance";

const getEpisodes = async () => {
  const { data } = await API.get("/episode");
  return data;
};

export default getEpisodes;
