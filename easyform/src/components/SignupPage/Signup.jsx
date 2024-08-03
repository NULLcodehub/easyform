import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import useDebounce from '../../Hooks/useDebounce';
import { AuthContext } from '../../context/AuthContext';

import {ClipLoader} from 'react-spinners'

const Signup = () => {

    const [email,setEmail]=useState('')
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const emailDebounce=useDebounce(email,500)
    const usernameDebounce=useDebounce(username,500)
    const passwordDebounce=useDebounce(password,500)

    const {login}=useContext(AuthContext)

    const [loader,setLoader]=useState(false)


    const navigate=useNavigate()


    const notify=(msg)=> toast(msg)

    const formHandler =async(e)=>{
        e.preventDefault()
        
        setLoader(true)
        try {
            
            
            if(emailDebounce || passwordDebounce){
                const response=await axios.post(`https://formflow-api.vercel.app/register`,{
                        username:usernameDebounce,
                        email:emailDebounce,
                        password:passwordDebounce
                    })
                    
                    if(response){
                        
                        // notify('Login successfull')
                        // setEmail('')
                        // setPassword('')                        
                        const token=response.data.token
                        login(token)
                        
                    }
            }else{
                notify('Full name, Email and Password required')
                // console.log('email and password required')
                setEmail('')
                setPassword('')
                setLoader(false)
            }

            
            
        } catch (error) {
            console.log(error.response.data)
            notify(error.response.data)
            // console.log(error.response)
            setEmail('')
            setPassword('')
            setLoader(false)
            
        }

    }



    return (
        
        <>
            <main className='flex'>
                <section className='hidden md:block right-section md:w-6/12 h-screen p-5'>
                    <div className='div-right w-full rounded-md h-90vh flex justify-center items-center '>
                        
                        <div className=' w-full '>
        	                <center>
                                <div className="div-right-in-text ">
                                    <h1>Free for everyone</h1>
                                    <p>Form flow is free for everyone.No hidden charge and it easy to use</p>

                                </div>
                                <div className="div-right-in-text">
                                    <h1>Get your website form data at you mail</h1>
                                    <p>No more intregration of backend for you small business web from .Get your massages directly at your business mail</p>
                                </div>
                                <div className="div-right-in-text">
                                    <h1>All submissions in one place</h1>
                                    <p>You don't need to go dig down to find your old mails.you can find all your form flow mail in our dashboard </p>
                                </div>
                                
                            </center>
                        </div>
                        
                    </div>

                </section>
                
                <section className='left-section w-full md:w-6/12 h-screen '>

                    <div className='flex justify-center items-center h-screen w-full'>
                        <div className='w-9/12 md:w-7/12 '>
                        <p className='text-xl md:text-40px text-left mb-6 '>Sign up for <span>Form Flow</span></p>
                            <form action="" onSubmit={formHandler}>
                               
                                    <input type="text"
                                        className='input-feild'
                                        placeholder='Full name'
                                        value={username}
                                        onChange={(e)=>setUsername(e.target.value)}

                                    />
                                    <br />
                                    <input type="text"
                                        className='input-feild'
                                        placeholder='youremail@email.com'
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}

                                    />
                                    <br />
                                    <input type="password"
                                        className='input-feild'
                                        placeholder='password'
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}

                                    />
                                    <button className='signin-btn'>
                                        {
                                            loader ? <ClipLoader size={20} color='white'/> : 'Sign up'
                                        }
                                        </button>
                                    <hr className='mt-2' />
                                    <Link to='/login'><h1 className='text-left my-2 text-indigo-400'>Allready have an account? sign in</h1></Link>
                               
                                
                            </form>
                        </div>
                    </div>
                    <ToastContainer/>
                </section>
            </main>
        </>
    );
};

export default Signup;