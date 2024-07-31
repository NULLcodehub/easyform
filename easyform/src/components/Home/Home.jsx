import React from 'react';
import codeImage from "../../../public/assets/images/landingImage.png"
const Home = () => {
    return (
        <>
            <main className='mx-8 md:mx-20'>

                <section>
                    <div className=' mt-20'>
                        <center>
                            <h1 className='text-30px md:text-40px font-extrabold'>Receive form submissions directly to your email.</h1>
                            <p className='mt-3 md:text-xl text-gray-600'>Write your form code,connect to our api, and we'll handle the process</p>
                            <div className='my-5 rounded-md'>
                                <img src={codeImage} alt="code-snepit" className='rounded-xl md:w-6/12'  loading='lazy' />
                            </div>
                            
                        </center>
                    </div>
                    
                </section>

                <section className='my-20'>
                    <div>
                        <center>
                            <h1 className='text-3xl md:text-5xl font-bold'>How it works</h1>
                        </center>
                    </div>

                    <div className='my-10'>
                        <center >
                            <div className='md:w-7/12  text-left'>
                                <h1 className='text-xl md:text-2xl font-semibold my-5'>1. Create an account </h1>
                                <h1 className='text-xl md:text-2xl font-semibold my-5'>2. Click on "Add new project" & Create a project.You will get an api end point.  </h1>
                                <h1 className='text-xl md:text-2xl font-semibold my-5'>3. Copy and paste the api in your react form </h1>
                            </div>
                            
                        </center>
                    </div>

                </section>

            </main>
        
        </>

    );
};  

export default Home;