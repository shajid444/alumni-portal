
import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
// import Home from "../Pages/Home/Home";
import Home2 from "../Pages/Home/Home2";


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
        ],
    },
]);