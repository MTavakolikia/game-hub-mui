// import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar"
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import { Genre } from "../models/genre";
import GameGrid from "../components/GameGrid";
import PlatformSelector from "../components/PlatformSelector";
import { Platform } from "../models/platform";

const DashboardLayout = () => {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)


    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-0 md:col-span-2">
                    <Sidebar selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)} />
                </div>
                <div className="col-span-12 md:col-span-10">
                    {/* <Outlet  /> */}
                    <PlatformSelector onSelectedPlatform={(platform) => setSelectedPlatform(platform)} />
                    <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout