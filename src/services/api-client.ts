import axios, { CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bfe85da57eeb46f8b56165ace50b5279",
  },
});

export { CanceledError };
