import API from "./AxiosInstance";

const getCharacters = async (params) => {
  const { queryKey } = params || {};

  const { data } = await API.get(
    `/character/${
      queryKey?.length > 1 && queryKey[1] ? "?page=" + queryKey[1] : ""
    }`
  );
  return data;
};

export default getCharacters;
