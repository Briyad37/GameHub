import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}


export interface Game {
  id: number;
  name: string;
  background_image:string,
  parent_platforms: {platform: Platform}[]
}


interface FetchGameResponse {
  count: number;
  results: Game[];
}

export default function useGame() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  // nyanditse kugirango i fetchinge request kuri ya nuza website 2
useEffect(() => {
const controller = new AbortController();


  
    apiClient
      .get<FetchGameResponse>("/games", {signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) =>{
       if (err instanceof CanceledError) return;
         setError(err.message)
        });

      return () => controller.abort();
  }, []);

  return { games, error };
};
