import API from "./AxiosInstance";

const getLocations = async () => {
  const { data } = await API.get("/location");
  return data;
};

export default getLocations;
