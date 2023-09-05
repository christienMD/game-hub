import { useQuery } from "@tanstack/react-query";
// import { FetchResponse } from "./useData";
import APIClient, { FetchResponse } from "../services/api-client";
// import apiClient from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const initialPlatforms: FetchResponse<Platform> = {
//   count: platforms.length,
//   results: platforms,
// }; 
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    // initialData: { count: platforms.length, results: platforms }
  });

export default usePlatforms;
