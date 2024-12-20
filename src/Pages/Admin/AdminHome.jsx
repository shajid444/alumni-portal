import React from 'react';
import { FaAd, FaHome, FaList, FaMoneyBill } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';

const AdminHome = () => {
    const [isAdmin] = useAdmin();
    // const isAdmin = true;
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">

                <ul className="menu p-4">

                    {
                        isAdmin ? <>
                            <li className="mb-5">
                                <NavLink to=''>
                                    <FaHome></FaHome>
                                    Admin Home </NavLink>
                            </li>

                            <li className="mb-5">
                                <NavLink to='/user'>
                                    <FaPerson></FaPerson>

                                    manage users </NavLink>
                            </li>
                            <li className="mb-5">
                                <NavLink to='/addProfile'>
                                    <FaPerson></FaPerson>

                                    Add Profile </NavLink>
                            </li>
                            
                            <li className="mb-5">
                                <NavLink to=''>
                                    <FaMoneyBill></FaMoneyBill>
                                    Payment Management </NavLink>
                            </li>
                            <li className="mb-5">
                                <NavLink to='/AllAlumni'>
                                    <FaAd></FaAd>

                                    All Alumni </NavLink>
                            </li>

                        </>

                            :

                            <>

                                <li className="mb-5">
                                    <NavLink to='/addteam'>
                                        
                                        Profile</NavLink>
                                </li>

                             

                            </>
                    }

                    {/* shared navlinks */}

                    <div className="divider">

                    </div>

                    <li className="mb-5">
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home </NavLink>
                    </li>


                </ul>
            </div>
            {/* dashboard content */}

            <div className="flex-1">
                {/* <Outlet></Outlet> */}
            </div>
        </div>
    );
};

export default AdminHome;