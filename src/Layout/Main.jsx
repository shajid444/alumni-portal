import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import Footer2 from '../Pages/Shared/Footer/Footer2';

const Main = () => {
    const location = useLocation();
    console.log(location.pathname);
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signUp');


    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {noHeaderFooter || <Footer2></Footer2>}
        </div>
    );
};

export default Main;