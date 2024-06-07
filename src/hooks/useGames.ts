import useData from "./useData";
import { Game } from "../models/game";


const useGames = () => useData<Game>("/games")

export default useGames