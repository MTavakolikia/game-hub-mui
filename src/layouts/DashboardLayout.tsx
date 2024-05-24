import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar"
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Topbar from "../components/Topbar/Topbar";

const DashboardLayout = () => {
    const [isClosing, setIsClosing] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const drawerWidth = 240;

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    return (
        <div>
            <Sidebar drawerWidth={drawerWidth} mobileOpen={mobileOpen} handleDrawerTransitionEnd={handleDrawerTransitionEnd} handleDrawerClose={handleDrawerClose} />
            <div>
                <Topbar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Outlet />
                </Box>
            </div>
        </div>
    )
}

export default DashboardLayout