import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <main>
                <nav>
                    <section className=' flex justify-between px-5 py-6'>
                        <div>
                            <h1>Brand Name</h1>
                        </div>

                        <div>
                            <ul className=''>
                                <li className='li-1'><button>Get Strated</button></li>
                                <li className='li-2'><button>Sign in</button></li>
                            </ul>
                        </div>
                    </section>
                </nav>
            </main>
        </>
    );
};

export default Navbar;