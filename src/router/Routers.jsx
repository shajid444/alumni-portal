
import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
// import Home from "../Pages/Home/Home";
import Home2 from "../Pages/Home/Home2";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/signUp/Signup";
import privateRoute from './PrivateRoute';
import Secret from "../Pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import AddAlumni from './../Pages/AddAlumni/AddAlumni';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home2 />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signUp",
                element: <Signup />,
            },
            {
                path: "/secret",
                element: <PrivateRoute>
                    <Secret></Secret>
                </PrivateRoute>,
            },
            {
                path:'/details/:item',
                element:<ViewDetails></ViewDetails>,
              
            },
            
            {
                path:'/addAlumni',
                element:<AddAlumni></AddAlumni>,
            },
        ],
    },
]);