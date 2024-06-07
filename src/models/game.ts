import { Platform } from "./platform";

export interface Game {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    metacritic: number;
    parent_platforms: { platform: Platform }[];
}

