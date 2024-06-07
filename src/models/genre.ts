export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: string;
    image_background: string;
}



export interface FetchGenresResponse {
    count: number,
    results: Genre[]
}