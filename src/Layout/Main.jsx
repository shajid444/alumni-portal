import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';


const Main = () => {
    const location = useLocation();
    console.log(location.pathname);
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signUp');


    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;