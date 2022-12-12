import API from "./AxiosInstance";

const getLocations = async (params) => {
  const { queryKey } = params || {};
  let url = "/location/";
  
  if (queryKey?.length > 1) {
    if (queryKey[1]?.type === "filter") {
      url += `?page=${queryKey[1]?.page}&name=${queryKey[1]?.searchText?.trim()}`;
    }
  }

  const { data } = await API.get(url);
  return data;
};

export default getLocations;
