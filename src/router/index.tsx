import { createBrowserRouter } from "react-router-dom";

import { LoginPage } from "../views/Login/index";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import AuthLayout from "../layout/AuthLayout";
import Welcome from "@/views/Welcome";
import About from "@/views/About";
import Home1 from "@/views/Home1";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
        children: [
          {
            path: "home1",
            element: <Home1></Home1>,
          },
        ],
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);

export { routers };
