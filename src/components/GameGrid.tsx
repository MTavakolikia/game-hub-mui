import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import GameCard from './GameCard';

interface Game {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    metacritic: number;
}

interface FetchGamesResponse {
    count: number,
    results: Game[]
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        apiClient.get<FetchGamesResponse>("/games").then(res => {
            setGames(res.data.results);
        }
        ).catch(e => setError(e.message))
    }, [])

    return (
        <div className='grid grid-cols-3 gap-4'>
            {error && <p>{error}</p>}
            {games.map(i =>
                <GameCard key={i.id} title={i.name} imgUrl={i.background_image} score={i.metacritic} />
            )}
        </div>
    )
}

export default GameGrid