import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Portal from "./pages/Portal";
import AppLayout from "./pages/AppLayout";
import Donations from "./pages/Donations";
import Departments from "./pages/Departments";
import DonationForm from "./pages/DonationForm";
import Petitions from "./pages/Petitions";
import Awareness from "./pages/Awareness";
import CommunityService from "./pages/CommunityService";
import TeamVolunteer from "./pages/TeamVolunteer";
import Dashboard from "./pages/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/portal",
          element: <Portal />,
        },
        {
          path: "/departments",
          element: <Departments />,
        },
        {
          path: "/donations",
          element: <Donations />,
        },
        {
          path: "/donate",
          element: <DonationForm />,
        },
        {
          path: "/petitions",
          element: <Petitions />,
        },
        {
          path: "/awareness",
          element: <Awareness />,
        },
        {
          path: "/communityservice",
          element: <CommunityService />,
        },
        {
          path: "/teamvolunteer",
          element: <TeamVolunteer />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
