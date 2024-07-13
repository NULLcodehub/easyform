import React from 'react';
import ReactDOM from 'react-dom'
import './Modal.css'
import { MdOutlineCancel } from "react-icons/md";

const Modal = ({isOpen,isClose}) => {

    console.log('from modal')

    if (!isOpen) return null;

    return ReactDOM.createPortal (
        <>

            <main className='modal'>
                <section className='w-5/12 h-65vh bg-white rounded-2xl p-5'>
                <div className='flex justify-between '>
                    <div className='font-semibold'>Create project</div>
                    <button onClick={isClose}><MdOutlineCancel className='w-7 h-7 text-gray-600'/></button>
                </div>

                <div className='mt-5'>
                    <form action="">
                        <label htmlFor="projectName">Project Name:</label><br />
                        <input type="text"

                        
                        />


                    </form>
                </div>
                
                    
                </section>
            </main>


        
        </>,
        document.getElementById('modal-portal-root')
    );
};

export default Modal;