import useData from "./useData";
import { Game } from "../models/game";
import { Genre } from "../models/genre";
import { Platform } from "../models/platform";


const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>("/games", { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } }, [selectedGenre?.id, selectedPlatform?.id])

export default useGames