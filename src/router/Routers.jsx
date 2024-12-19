
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



import AdminHome from './../Pages/Admin/AdminHome';
import Error from "../Pages/Error/Error";
import Update from "../Pages/Update/Update";
import AllUser from "../Pages/AllUser/AllUser";
import Alumni from "../Pages/Alumni/Alumni";
import About from "../Pages/About/About";
//import News from "../Pages/News/News";
import StoryDetails from "../Pages/StoryDetails/StoryDetails";
import StoryDetails2 from "../Pages/StoryDetails/StoryDetails2";
import BlogsDetails from "../Pages/BlogsDetails/BlogsDetails";
//import NewsBlogsSection from "../Pages/NewsBlogsSection/NewsBlogsSection";
//import Notice from "../Pages/Notice/Notice";
//import NoticeDetails from './../Pages/Notice/NoticeDetails';


import MedalTable from "../Pages2/MedalTable/MedalTable";
import PaymentForm from "../Pages2/PaymentForm/PaymentForm";
import HighlightsSectionDetails from "../Pages2/HighlightsSectionDetails/HighlightsSectionDetails";

import ResultSec from "./../Pages2/ResultSec/ResultSec";
import EventSection from "../Pages2/EventSection/EventSection";
import AddTeamSection from "../Pages2/AddTeamSection/AddTeamSection";
import MedalTableSection from "../Pages2/MedalTable/MedalTableSection";
import AddProfile from "../Pages/AddProfile/AddProfile";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
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
                path: "/medalTable",
                element: <MedalTable />,
            },
            {
                path: "/payment",
                element: <PaymentForm />,
            },
            {
                path: "/Highlights",
                element: <HighlightsSectionDetails/>,
            },
            {
                path: "/ResultSec",
                element: <ResultSec />,
            },
            {
                path: "/EventSection",
                element: <EventSection />,
            },
            {
                path: "/addteam",
                element: <AddTeamSection />,
            },
            {
                path: "/medalsection",
                element: <MedalTableSection />,
            },
            {
                path: "/addProfile",
                element: 
                    <AddProfile></AddProfile>
                   
            },
            // -------------------------------------------
            {
                path:'/details/:item',
                element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
              
            },

         
            

            
           
            {
                path:'/admin',
                element:<AdminHome></AdminHome>,
            },
            {
                path:'/user',
                element:<AllUser></AllUser>,
            },
            {
                path:'/allAlumni',
                element:<Alumni></Alumni>,
            },
            {
                path:'/about',
                element:<About></About>,
            },
          
            
           
            {
                path: '/update/:id',
                element:<Update></Update>,
                loader : ({params})=> fetch(`http://localhost:5000/profile/${params.id}`),
              },
        ],
    },
]);