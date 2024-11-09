import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Portal from "./pages/Portal";
import AppLayout from "./pages/AppLayout";
import Donations from "./pages/Donations";
import Departments from "./pages/Departments";
import DonationForm from "./pages/DonationForm";

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
          path: "/donations",
          element: <Donations />,
        },
        {
          path: "/departments",
          element: <Departments />,
        },
        {
          path: "/donate",
          element: <DonationForm />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
