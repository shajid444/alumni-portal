import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaHome, FaInbox } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { HiChatAlt } from 'react-icons/hi';
import Chatbox from './../../../Component/Chatbox/Chatbox';
import { VscTerminalUbuntu } from 'react-icons/vsc';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li className='text-zinc-900 bg-slate-300 rounded-lg'> <Link to='/'><a><FaHome></FaHome></a> </Link> </li>
      
        <li className='text-white'> <Link to='/secret'><a>secret</a> </Link> </li>
        <li className='text-white'> <Link to='/addAlumni'><a>Add+</a> </Link> </li>
       





    </>
    return (
       

        <div className="shadow-lg rounded-lg navbar  bg-opacity-80 max-w-screen-xl bg-black bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-black  rounded-box w-52 ">
                        {navOptions}
                    </ul>
                </div>
                <div className=" flex justify-center items-center ">
                    <h1 className="text-primary text-2xl font-bold flex justify-center items-center"><VscTerminalUbuntu /> -Alumnut</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex ml-40">
                <ul className="menu menu-horizontal px-1 ">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end z-50 ">
                {
                    user ? <div className="dropdown dropdown-end " >
                        <label tabIndex={0} className="btn  btn-ghost btn-circle avatar" >
                            <div className=" w-10 rounded-full flex items-center ">
                                <img alt="Tailwind CSS Navbar component" src={"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm btn-ghost">{user.displayName || 'name not found'}</button>
                            </li>
                            <li>
                                <Link to='/' className="btn btn-sm btn-ghost"> Update Profile </Link>
                            </li>
                            <li>
                                <Link to="/admin" className="btn btn-sm btn-ghost">Dash Board </Link>
                            </li>
                            <li className=''>
                                <div className='flex justify-center'>
                                    <button onClick={handleLogout}>Log Out</button>

                                </div>

                             


                            </li>

                            <li>
                            <Link to='/chat' className='flex justify-center'>  
                               {/* <div className='text-xl border-2 text-center bg-blue-600 '><HiChatAlt /> Chatbox </div> */}
                               <button className="btn btn-active btn-primary w-full p-2 pr-4 pl-4"><HiChatAlt /> Chat box</button>
                            
                            </Link>
                            </li>

                        </ul>


                    </div>


                        :
                        <Link to='/login'>
                            <button className="btn">Login</button>
                        </Link>


                }



            </div>
        </div>
    );
};

export default Navbar;