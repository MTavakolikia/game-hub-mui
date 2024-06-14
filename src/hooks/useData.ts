import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


export interface FetchGamesResponse<T> {
    count: number,
    results: T[]
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true)
    const controller = new AbortController();
    useEffect(() => {
        setLoading(true)

        apiClient.get<FetchGamesResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig }).then(res => {
            setData(res.data.results);
            setLoading(false)
        }
        ).catch(e => {
            if (e instanceof CanceledError) return;
            setLoading(false)
            setError(e.message)

        })

        return () => controller.abort();
    }, deps ? [...deps] : []);

    return { data, loading, error }
}

export default useData