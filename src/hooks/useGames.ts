import useData from "./useData";
import { Game } from "../models/game";
import { Genre } from "../models/genre";


const useGames = (selectedGenre: Genre | null) => useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [selectedGenre?.id])

export default useGames