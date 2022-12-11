import API from "./AxiosInstance";

const getEpisodes = async (params) => {
  const { queryKey } = params || {};
  let url = "/episode/";

  if (queryKey?.length > 1) {
    if (queryKey[1]?.type === "singleEpisode") {
      url += queryKey[1]?.id;
    }
  }

  const { data } = await API.get(url);
  return data;
};

export default getEpisodes;
