import React, { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

import useDebounce from '../../Hooks/useDebounce';



const Login = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const emailDebounce=useDebounce(email,500)
    const passwordDebounce=useState(password,500)

    // console.log(emailDebounce)

    return (
        
        <>
            <main className='flex'>
                <section className='hidden md:block right-section md:w-6/12 h-screen p-5'>
                    <div className='div-right w-full rounded-md h-80vh flex justify-center items-center '>
                        
                        <div className=' w-full '>
        	                <center>
                                <div className="div-right-in-text ">
                                    <p>hello world</p>
                                </div>
                                <div className="div-right-in-text">
                                    <p>hello world 2</p>
                                </div>
                                <div className="div-right-in-text">
                                    <p>hello world 3</p>
                                </div>
                            </center>
                        </div>
                        
                    </div>

                </section>
                
                <section className='left-section w-full md:w-6/12 h-screen '>

                    <div className='flex justify-center items-center h-screen w-full'>
                        <div className='w-9/12 md:w-7/12 '>
                        <p className='text-xl md:text-40px text-center mb-6 '>Form Flow</p>
                            <form action="">
                               
                                    <input type="text"
                                        className='input-feild'
                                        placeholder='youremail@email.com'
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}

                                    />
                                    <br />
                                    <input type="text"
                                        className='input-feild'
                                        placeholder='password'
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}

                                    />
                                    <button className='signin-btn'>Sign in</button>
                                    <hr className='mt-2' />
                                    <Link to='/signup'><h1 className='text-left my-2 text-indigo-400'>create a new account</h1></Link>
                               
                                
                            </form>
                        </div>
                    </div>

                </section>
            </main>
        </>
    );
};

export default Login;