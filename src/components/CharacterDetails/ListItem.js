import { useQuery } from "@tanstack/react-query";
import getEpisodes from "../../api/getEpisodes";

const ListItem = ({ url }) => {
  const { data, error, isError, isLoading } = useQuery(
    ["SingleEpisode", { type: "singleEpisode", id: url?.split("episode/")[1] }],
    getEpisodes
  );

  return (
    <li className="flex items-center relative listItem pl-5">{data?.name}</li>
  );
};

export default ListItem;
