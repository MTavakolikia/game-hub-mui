import GameCard from './GameCard';
import useGames from '../hooks/useGames';


const GameGrid = () => {
    const { games, error } = useGames();

    return (
        <div className='grid grid-cols-3 gap-4'>
            {error && <p>{error}</p>}
            {games.map(i =>
                <GameCard key={i.id} games={i} />
            )}
        </div>
    )
}

export default GameGrid