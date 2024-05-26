import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar"
import Navbar from "../components/Navbar/Navbar";

const DashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-0 md:col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-12 md:col-span-10">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout