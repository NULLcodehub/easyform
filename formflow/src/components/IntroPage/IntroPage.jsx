import React from 'react';
import './IntroPage.css'
import introImage from '../../assets/intro_images2.jpg'

const IntroPage = () => {
    return (
        <section className=' h-screen float-right w-10/12 '>
            
            <div className='bg-white h-5/6 mx-5 my-5 intropage'>
                    <center className='m-20'>
                        <h1 className='  text-5xl font-bold'>Control Your submissions without code</h1>
                        <div>
                            <img src={introImage} className='w-5/12' alt="" />
                        </div>
                    </center>
            </div>
            
        </section>
    );
};

export default IntroPage;