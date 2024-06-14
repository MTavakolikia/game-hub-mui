import useData from "./useData";
import { Game } from "../models/game";
import { GameQuery } from "../layouts/DashboardLayout";


const useGames = (gameQuery: GameQuery) => useData<Game>("/games", { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id } }, [gameQuery])

export default useGames