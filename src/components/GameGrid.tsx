import GameCard from './GameCard';
import useGames from '../hooks/useGames';

import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './Loading/GameCardSkeleton';
import { GameQuery } from '../layouts/DashboardLayout';


interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, loading, error } = useGames(gameQuery);
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