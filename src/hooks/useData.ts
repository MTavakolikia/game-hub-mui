import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface FetchGamesResponse<T> {
    count: number,
    results: T[]
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true)
    const controller = new AbortController();
    useEffect(() => {
        apiClient.get<FetchGamesResponse<T>>(endpoint, { signal: controller.signal }).then(res => {
            setData(res.data.results);
            setLoading(false)
        }
        ).catch(e => {
            if (e instanceof CanceledError) return;
            setLoading(false)
            setError(e.message)

        })

        return () => controller.abort();
    }, []);

    return { data, loading, error }
}

export default useData