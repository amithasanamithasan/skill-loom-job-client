import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";
import Home from "../Pages/Home";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  children:[
    {
      index:true,
      element:<Home/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/registration",
      element:<Registration/>
    },
  ]},
 
]);