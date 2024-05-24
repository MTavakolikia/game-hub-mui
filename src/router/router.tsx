import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                path: "/inbox",
                element: <DashboardLayout />,
            },
            {
                path: "/",
                element: <DashboardLayout />,
            }
        ]
    },
]);