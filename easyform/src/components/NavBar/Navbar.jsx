import React ,{useContext}from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const {isAuth,logout}=useContext(AuthContext)
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
                                </ul>}

                            {isAuth &&
                                <ul>
                                    <button onClick={logout}>Logout</button>
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