import API from "../AxiosInstance";

const getCharacters = async () => {
  const { data } = await API.get("/character");
  return data;
};

export default getCharacters;
