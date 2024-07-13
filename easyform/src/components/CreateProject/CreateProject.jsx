import React from 'react';
import './CreateProject.css'
import { IoAdd } from "react-icons/io5";

const CreateProject = () => {
    return (
        <>
            <main className='bg-white w-2/12 h-screen'>
                <section>
                    <div className='flex justify-center items-center'> 
                        <button className='add-btn w-4/5 py-2 my-3 flex justify-center'><IoAdd className='w-6 h-6 mx-1'/> Add New</button>
                    </div>


                </section>
            </main>
        </>
    );
};

export default CreateProject;