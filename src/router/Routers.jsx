
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
import Chatbox from './../Component/Chatbox/Chatbox';
import MessengerApp from './../Component/Chatbox/MessengerApp';
import AdminHome from './../Pages/Admin/AdminHome';
import Error from "../Pages/Error/Error";
import Update from "../Pages/Update/Update";
import AllUser from "../Pages/AllUser/AllUser";
import Alumni from "../Pages/Alumni/Alumni";
import About from "../Pages/About/About";
import News from "../Pages/News/News";
import StoryDetails from "../Pages/StoryDetails/StoryDetails";
import StoryDetails2 from "../Pages/StoryDetails/StoryDetails2";
import BlogsDetails from "../Pages/BlogsDetails/BlogsDetails";
import NewsBlogsSection from "../Pages/NewsBlogsSection/NewsBlogsSection";
import Notice from "../Pages/Notice/Notice";
import NoticeDetails from './../Pages/Notice/NoticeDetails';
import Job from "../Pages/Job/Job";
import JobDetails from "../Pages/Job/JobDetails";
import Stories from "../Pages/Stories/Stories";


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
                path:'/details/:item',
                element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
              
            },

            {
                path: "/addAlumni",
                element: <PrivateRoute>
                    <AddAlumni></AddAlumni>
                   
                </PrivateRoute>,
            },
            

            // {
            //     path:'/chat',
            //     element:<Chatbox></Chatbox>,
            // },
            {
                path:'/chat',
                element:<MessengerApp></MessengerApp>,
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
                path:'/news',
                element:<News></News>,
            },
            {
                path:'/storyDetails',
                element:<StoryDetails></StoryDetails>,
            },
            {
                path:'/storyDetails2',
                element:<StoryDetails2></StoryDetails2>,
            },
            {
                path:'/blogsDetails',
                element:<BlogsDetails></BlogsDetails>,
            },
            {
                path:'/newsBlogs',
                element:<NewsBlogsSection></NewsBlogsSection>,
            },

            {
                path:'/notice',
                element:<Notice></Notice>,
            },
            {
                path:'/noticeDetails',
                element:<NoticeDetails></NoticeDetails>,
            },
            {
                path:'/job',
                element:<Job></Job>,
            },
            {
                path:'/jobDetails',
                element:<JobDetails></JobDetails>,
            },
            {
                path:'/stories',
                element:<Stories></Stories>,
            },
            {
                path: '/update/:id',
                element:<Update></Update>,
                loader : ({params})=> fetch(`http://localhost:5000/info/${params.id}`),
              },
        ],
    },
]);