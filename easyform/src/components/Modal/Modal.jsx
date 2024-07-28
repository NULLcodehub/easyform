import React, { useContext,useState } from 'react';
import ReactDOM from 'react-dom'
import './Modal.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineCancel } from "react-icons/md";
import { AuthContext } from '../../context/AuthContext';
import { ProjectContext } from '../../context/ProjectListContext';

import {CircleLoader} from 'react-spinners'

import useDebounce from '../../Hooks/useDebounce';

import axios from 'axios';

const Modal = ({isOpen,isClose}) => {

    const [projectName,setProjectName]=useState('')
    const projectNameDebounced=useDebounce(projectName,500)


    const notify=(msg)=> toast(msg)

    const {tokenData}=useContext(AuthContext)
    // console.log(tokenData.id)

    const {addProjectData}=useContext(ProjectContext)

    const [loader,setLoader]=useState(false)

    // console.log('from modal')
    if (!isOpen) return null;



    const handelProjectForm= async (e)=>{
        e.preventDefault()
        // console.log("from hhandel")
        setLoader(true)
        try {

            if (projectNameDebounced && tokenData.id){

                const response= await axios.post('http://localhost:4000/create/project',{
                    projectname:projectNameDebounced,
                    user_id:tokenData.id

                })
            
                addProjectData(response.data)
                setProjectName('')
                isClose()
            }


            
        } catch (error) {
            console.log(error)
            notify(error.response.data)
            setLoader(false)
            
        }
    }



    


    return ReactDOM.createPortal (
        <>

            <main className='modal'>
                <section className='w-5/12 h-65vh bg-white rounded-2xl p-5'>
                <div className='flex justify-between '>
                    <div className='font-semibold'>Create project</div>
                    <button onClick={isClose}><MdOutlineCancel className='w-7 h-7 text-gray-600'/></button>
                </div>

                <div className='mt-5'>
                    <form action="" onSubmit={handelProjectForm}>
                        <label htmlFor="projectName">Project Name:</label><br />
                        <input type="text"
                        value={projectName}
                        onChange={(e)=> setProjectName(e.target.value)}
                        required
                        />

                     <div className='mt-5 w-full bg-green-950 rounded-xl h-32 modal-info'>


                    </div>

                    <div className='flex justify-end relative top-16'>
                        <button className='modal-btn' type='submit'>Create project</button>
                    </div>


                    </form>
                </div>
                
                
                    
                </section>
            </main>


        
        </>,
        document.getElementById('modal-portal-root')
    );
};

export default Modal;