import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
   {
    path: '/login',
    element:<Login/>,
      },
        {
    path: '/register',
    element:<Registration/>,
      },
]);