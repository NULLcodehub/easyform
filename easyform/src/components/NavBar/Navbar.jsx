import React ,{useContext}from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
import { AiOutlineLogout } from "react-icons/ai";

import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const {isAuth,logout,tokenData}=useContext(AuthContext)
    // console.log(tokenData)
    return (
        <>
            <main>
                <nav>
                    <section className=' flex justify-between px-5 py-6'>
                        <div>
                            <p>Form Flow</p>
                        </div>

                        <div>
                            {
                                !isAuth &&
                                <ul >
                                    <Link to='/signup'><button><li className='li-1'>Get Strated</li></button></Link>
                                    <Link to='/login'><button><li className='li-2'>Sign in</li></button></Link>
                                </ul>
                            }

                            

                            {isAuth &&
                                <ul className=''>
                                    <li className='font-semibold text-xl relative bottom-1'><button>{tokenData.username}</button></li>
                                    <li><button onClick={logout} className=''><AiOutlineLogout className='w-6 h-6'/></button></li> 
                                </ul>
                            }
                            
                        </div>
                    </section>
                </nav>
            </main>
        </>
    );
};

export default Navbar;