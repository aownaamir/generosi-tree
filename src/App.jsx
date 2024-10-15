import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Portal from "./pages/Portal";
import AppLayout from "./pages/AppLayout";
import Donations from "./ui/Donations";
import Departments from "./ui/Departments";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      //   //   errorElement: <Error />,
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
        //   // {
        //   //   path: "/portal",
        //   //   element: <LoginSignUp />,
        //   // },
        //   // {
        //   //   path: "/mentorship",
        //   //   element: <Mentorship />,
        //   // },
        //   // {
        //   //   path: "/networking",
        //   //   element: <Networking />,
        //   // },
        //   // {
        //   //   path: "/resources",
        //   //   element: <Resources />,
        //   // },
        //   // {
        //   //   path: "/testing",
        //   //   element: <Testing />,

        //   // },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
