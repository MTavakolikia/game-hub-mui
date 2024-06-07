export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface FetchPlatformResponse {
    count: number,
    results: Platform[]
}