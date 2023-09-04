// import { useEffect, useState } from "react";
// import apiClient, { CanceledError } from "../services/api-client";

import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
// import { FetchResponse } from "./useData";
import { FetchResponse } from "../services/api-client";
import { Genre } from "./useGenres";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

const useGames = (
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null
  gameQery: GameQuery
) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQery.genre?.id,
            parent_platforms: gameQery.platform?.id,
            ordering: gameQery.sortOrder,
            search: gameQery.searchText,
          },
        })
        .then((res) => res.data),
  });

// const useGames = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true);
//     apiClient
//       .get<FetchGamesResponse>("/games", { signal: controller.signal })
//       .then((res) => {
//         setGames(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { games, error, isLoading };
// };

export default useGames;
