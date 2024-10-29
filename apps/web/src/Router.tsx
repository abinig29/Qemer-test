import { createBrowserRouter } from "react-router-dom";

import { Applayout } from "./components/layouts/AppLayout";

import StudentListing from "./pages/Dashboard/StudentListing";
import IndexPage from "./pages/Index";
import StudentRegistration from "./pages/StudentRegistration";
import { DashboardLayout } from "./components/layouts/DashboardLayout";
import NoMatch from "./pages/NoMatch";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "",
                element: <IndexPage />,
            },
            {
                path: "studentRegistration",
                element: <StudentRegistration />,
            },

        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "",
                element: <StudentListing />,
            },
        ],
    },

    {
        path: "*",
        element: <NoMatch />,
    },
], {
    basename: global.basename
})
