// import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar"
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import { Genre } from "../models/genre";
import GameGrid from "../components/GameGrid";
import PlatformSelector from "../components/PlatformSelector";
import { Platform } from "../models/platform";
import { Stack } from "@mui/material";
import SortSelector from "../components/SortSelector";

export interface GameQuery {
    genre: Genre | null,
    platform: Platform | null
}

const DashboardLayout = () => {

    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

    // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
    // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)


    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-0 md:col-span-2">
                    <Sidebar selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
                </div>
                <div className="col-span-12 md:col-span-10 ">
                    {/* <Outlet  /> */}
                    <Stack direction="row" sx={{ marginBottom: "15px", marginTop: "10px" }} spacing={2}>
                        <PlatformSelector onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
                        <SortSelector />
                    </Stack>


                    <GameGrid gameQuery={gameQuery} />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout