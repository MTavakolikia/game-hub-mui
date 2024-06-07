import useData from "./useData";
import { Platform } from "../models/platform";


const usePlatforms = () => useData<Platform>('/platforms/lists/parents')
export default usePlatforms