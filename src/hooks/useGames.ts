import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Genre } from "./useGenres";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
}

interface FetchGames {
  count: number;
  results: Game[];
}

export default function useGames(selectedGenre: Genre | null) {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchGames>("/games", { params: { genres: selectedGenre?.id } })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [selectedGenre?.id]);

  return { games, error, isLoading };
}
