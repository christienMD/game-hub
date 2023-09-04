// import { useEffect, useState } from "react";
// import apiClient, { CanceledError } from "../services/api-client";
// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
// import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// interface FetchGenresResponse {
//   count: number;
//   results: Genre[];
// }

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: { count: genres.length, results: genres },
  });
{
  /*useData<Genre>("/genres")*/
}

// const useGenres = () => {
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true);
//     apiClient
//       .get<FetchGenresResponse>("/genres", { signal: controller.signal })
//       .then((res) => {
//         setGenres(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

// return { genres, error, isLoading };
// };
export default useGenres;
