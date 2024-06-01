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
    slug: string;
    background_image: string;
    metacritic: number;
    parent_platforms: { platform: Platform }[];
}



interface FetchGamesResponse {
    count: number,
    results: Game[]
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const controller = new AbortController();
    useEffect(() => {
        apiClient.get<FetchGamesResponse>("/games", { signal: controller.signal }).then(res => {
            setGames(res.data.results);
        }
        ).catch(e => {
            if (e instanceof CanceledError) return;
            setError(e.message)
        })

        return () => controller.abort();
    }, []);

    return { games, error }
}

export default useGames