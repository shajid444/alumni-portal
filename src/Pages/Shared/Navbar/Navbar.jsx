import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaHome } from "react-icons/fa";






const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user.photoURL);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li className='text-black bg-white rounded-xl  font-bold mr-2 '> <Link to='/'><a><FaHome></FaHome></a> </Link> </li>
        <li className='text-black bg-white rounded-xl  font-bold mr-2'> <Link to='/EventSection'><a>EVENTS</a> </Link> </li>
        <li className='text-black bg-white rounded-xl  font-bold mr-2'> <Link to='/ResultSec'><a>RESULTS</a> </Link> </li>
        <li className='text-black bg-white rounded-xl  font-bold mr-2'> <Link to='/medalTable'><a>MEDAL TABLE</a> </Link> </li>


        <li className='text-black bg-white rounded-xl  font-bold mr-2'> <Link to='/Highlights'><a>WATCH HIGHLIGHTS</a> </Link> </li>
        <li className='text-black bg-white rounded-xl  font-bold mr-2'> <Link to='/signUp'><a>SIGNUP</a> </Link> </li>
        <li className='text-black bg-white rounded-xl  font-bold mr-2'> <Link to='/allAlumni'><a>all</a> </Link> </li>


        








    </>
    return (


        <div className="shadow-lg bg-opacity-25 mb-5 rounded-lg navbar  max-w-screen-xl bg-gradient-to-r from-indigo-500 ...">
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
                    <h1 className="text-white text-2xl font-bold flex justify-center items-center">PARIS 2024</h1>
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
                                <img alt="Tailwind CSS Navbar component" src={user.photoURL ||'https://lh3.googleusercontent.com/a/ACg8ocK52MpSL_ke6jDrF25LNORD9xr-9l_QDll5jFssqVn0-xdqXoQ8=s96-c-rg-br100' } />
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
                                <Link to="/admin" className="btn btn-sm btn-ghost">

                                    <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-2 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                                            <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                                        </svg>
                                        <span>Dashboard</span>
                                    </a>
                                </Link>

                            </li>
                            <li className=''>
                                <div className='flex justify-center mt-3'>
                                    <button onClick={handleLogout}><a rel="noopener noreferrer" href="#" className="flex space-x-2 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                                            <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                            <rect width="32" height="64" x="256" y="232"></rect>
                                        </svg>
                                        <span>Logout</span>
                                    </a></button>

                                </div>




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