import GameCard from './GameCard';
import useGames from '../hooks/useGames';

import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './Loading/GameCardSkeleton';
import { Genre } from '../models/genre';
import { Platform } from '../models/platform';


interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
    const { data, loading, error } = useGames(selectedGenre, selectedPlatform);
    const skeletonItems = [1, 2, 3, 4, 5, 6]
    return (
        <div className='grid grid-cols-3 gap-4'>
            {error && <p>{error}</p>}

            {loading ?
                skeletonItems.map(item =>
                    <GameCardContainer key={item}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                )
                :
                data.map(i =>
                    <GameCardContainer key={i.id}>
                        <GameCard games={i} />
                    </GameCardContainer>

                )
            }

        </div>
    )
}

export default GameGrid