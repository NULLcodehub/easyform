import React, { useState } from 'react';
import './CreateProject.css'
import { IoAdd } from "react-icons/io5";

import Modal from '../Modal/Modal';

const CreateProject = () => {
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [mountComponent,setMountComponent]=useState(false)

    // const handleModalMount=()=>{
    //     setMountComnent(true)
    // }

    const handleOpen=()=>{
        setIsModalOpen(true)
        setMountComponent(true)
    }

    const handleClose=()=>{
        setIsModalOpen(false)
    }


    return (
        <>
            <main className='bg-white w-2/12 h-screen'>
                <section>
                    <div className='flex justify-center items-center'> 
                        <button  onClick={handleOpen} className='add-btn w-4/5 py-2 my-3 flex justify-center'><IoAdd className='w-6 h-6 mx-1'/> Add New</button>
                    </div>
                    { mountComponent &&
                        <Modal isOpen={isModalOpen} isClose={handleClose}/>
                    }
                    


                </section>
            </main>
        </>
    );
};

export default CreateProject;