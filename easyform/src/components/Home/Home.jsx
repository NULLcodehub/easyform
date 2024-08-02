import React from 'react';
// import codeImage from "../../../public/assets/images/landingImage.png"
import banner from '../../assets/bannerimage.gif'
import addnew from '../../assets/add new.png'
import apiendpintcode from '../../assets/apiendpoint.png'

import './Home.css'

import { HiMiniArrowDown } from "react-icons/hi2";
const Home = () => {
    return (
        <>
            <section className='bg-white mt-0'>
                <main className='mx-8 md:mx-20 home-section2  '>
                    <section className='md:h-screen'>
                        <div className='relative top-20'>
                            <center>
                                <h1 className='text-30px md:text-50px  heading'>Receive form submissions directly to your email.</h1>
                                <p className='mt-3 md:text-xl text-gray-600'>Write your form code,connect to our api, and we'll handle the process</p>
                                <div className='my-5 rounded-md'>
                                    <img src={banner} alt="code-snepit" className='rounded-md md:w-5/12'  loading='lazy' />
                                </div>
                                {/* <div className='md:block hidden mt-40'>
                                    <HiMiniArrowDown className='w-10 h-10 text-gray-400 animate-bounce  '/>
                                </div> */}
                
                            </center>
                        </div>
                
                    </section>
                    <section className=' my-20 md:my-0'>
                        <div>
                            <center>
                                <h1 className='text-3xl md:text-5xl font-bold'>How it works</h1>
                            </center>
                        </div>
                        <div className='my-10'>
                            <center >
                                <div className='md:w-7/12 text-gray-600  text-left'>
                                    <h1 className='text-xl md:text-2xl font-semibold my-5'>1. Create an account </h1>
                                    <h1 className='text-xl md:text-2xl font-semibold my-5'>2. Click on "Add new" & Create a project.You will get an Api end point.  </h1>
                                    <div className='my-6 flex justify-center md:justify-normal'>
                                        <img src={addnew} className='border-2 md:mx-4' alt="" />
                                    </div>
                                    <h1 className='text-xl md:text-2xl font-semibold my-5'>3. Copy and paste the api in your react form </h1>
                                    <div className='my-3'>
                                        <img src={apiendpintcode} alt="" loading='lazy' className='md:w-9/12 md:mx-4 rounded-md' />
                                    </div>
                                    <h1 className='text-xl md:text-2xl font-semibold my-5'>4. Now your work is done. Rest is on us. Massages will be send to your Email Address directly  </h1>
                                </div>
                
                
                            </center>
                        </div>
                    </section>
                </main>
            </section>
        
        </>

    );
};  

export default Home;