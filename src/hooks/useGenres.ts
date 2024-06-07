import useData from "./useData";
import { Genre } from "../models/genre";


const useGenres = () => useData<Genre>('/genres')
export default useGenres