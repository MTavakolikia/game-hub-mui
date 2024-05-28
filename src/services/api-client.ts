import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'd4de9eeff1194ab8bef4cfad87fb430c'
    }
})