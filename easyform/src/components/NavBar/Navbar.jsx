import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <main>
                <nav>
                    <section className=' flex justify-between px-5 py-6'>
                        <div>
                            <p>Form Flow</p>
                        </div>

                        <div>
                            <ul >
                                <Link to='/signup'><button><li className='li-1'>Get Strated</li></button></Link>
                                <Link to='/login'><button><li className='li-2'>Sign in</li></button></Link>
                            </ul>
                        </div>
                    </section>
                </nav>
            </main>
        </>
    );
};

export default Navbar;