import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: string;
    image_background: string;
}



interface FetchGenresResponse {
    count: number,
    results: Genre[]
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true)
    const controller = new AbortController();
    useEffect(() => {
        apiClient.get<FetchGenresResponse>("/genres", { signal: controller.signal }).then(res => {
            setGenres(res.data.results);
            setLoading(false)
        }
        ).catch(e => {
            if (e instanceof CanceledError) return;
            setLoading(false)
            setError(e.message)

        })

        return () => controller.abort();
    }, []);

    return { genres, loading, error }
}

export default useGenres