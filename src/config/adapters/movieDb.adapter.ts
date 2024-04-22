import { THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const MovieDbFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: THE_MOVIE_DB_KEY ?? 'no-key',
    // api_key: 'a351105ecf0a398f47a003f67d1d9e9a',
    language: 'es'
  }
});