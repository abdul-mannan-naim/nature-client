import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { VscHome } from "react-icons/vsc";
import { GiEternalLove } from "react-icons/gi";
import { MdOutlineReportOff } from "react-icons/md";
import { AiTwotoneFileAdd } from "react-icons/ai";
import { FaSignInAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth)
    const logOut = () => {
        signOut(auth)
    }
    return (
        <div className='  '>
            <div className="navbar bg-base-100 flex justify-between border-2 border-y-fuchsia-500 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-fuchsia-300 font-bold">
                            <li><NavLink to="/">  <VscHome /> </NavLink></li>
                            <li><NavLink to="/likes">  <GiEternalLove /> </NavLink></li>
                            <li><NavLink to="/report">  <MdOutlineReportOff /> </NavLink></li> 

                            {user ? <> <button onClick={logOut} > <FaSignOutAlt />  </button> </> : <><li><NavLink to="/signup ">  <SiGnuprivacyguard/>  </NavLink></li>
                                <li><NavLink to="/login ">  <FaSignInAlt /> </NavLink></li></>}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl ml-6 text-fuchsia-500 font-bold ">  Insta-Shohor   </Link>
                </div>
                <div className="navbar-center hidden lg:flex mr-7">
                    <ul className="menu menu-horizontal px-1 text-fuchsia-300 font-bold">
                        <li><NavLink to="/">  <VscHome /> </NavLink></li>
                        <li><NavLink to="/likes">  <GiEternalLove /> </NavLink></li>
                        <li><NavLink to="/report">  <MdOutlineReportOff /> </NavLink></li> 

                        {user ? <> <button onClick={logOut} >  <FaSignOutAlt /> </button> </> : <><li><NavLink to="/signup ">   <SiGnuprivacyguard/>  </NavLink></li>
                            <li><NavLink to="/login ">   <FaSignInAlt /> </NavLink></li></>} 
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;