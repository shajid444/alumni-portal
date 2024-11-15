import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaHome } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout =()=>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error));
    }

    const navOptions = <>
        <li className='text-zinc-900 bg-slate-300 rounded-lg'> <Link to='/'><a><FaHome></FaHome></a> </Link> </li>
        <li className='text-white'>
            <a>Parent</a>

        </li>
        <li className='text-white'><a>Item 3</a></li>
        <li className='text-white'> <Link to='/secret'><a>secret</a> </Link> </li>


    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-80 max-w-screen-xl bg-black bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}

                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl text-[#FF9843]">Alum<span className='text-[#9B7EBD]'>Net</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                
                {user ? <><button onClick={handleLogout} className="btn btn-ghost bg-teal-400 border-0 border-b-8 border-purple-400 "><MdOutlineLogout></MdOutlineLogout></button>
                </> :
                    <><Link to='/login'> <a className="btn bg-teal-400 border-0 border-b-8 border-purple-400">Login</a> </Link></>}
            </div>
        </div>
    );
};

export default Navbar;