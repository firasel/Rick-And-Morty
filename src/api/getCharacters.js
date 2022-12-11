import API from "./AxiosInstance";

const getCharacters = async (params) => {
  const { queryKey } = params || {};
  let url = "/character/";

  if (queryKey?.length > 1) {
    if (queryKey[1]?.type === "filter") {
      url += `?page=${queryKey[1]?.page}`;
    }
    if (queryKey[1]?.type === "singleCharacter") {
      url += queryKey[1]?.id;
    }
  }

  const { data } = await API.get(url);
  return data;
};

export default getCharacters;
