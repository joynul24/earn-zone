import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import ContactUs from "../pages/ContactUs/ContactUs";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home> 
        },
        {
          path: 'cotactUs',
          element: <ContactUs></ContactUs>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'dashboard',
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        }
      ]
    }
  ])

  export default router