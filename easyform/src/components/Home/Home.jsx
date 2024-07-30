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
                                <img src={codeImage} alt="code-snepit" className='rounded-xl'  loading='lazy' />
                            </div>
                            
                        </center>
                    </div>
                    
                </section>

            </main>
        
        </>

    );
};  

export default Home;