import React, { useContext, useState } from 'react';
import './CreateProject.css'
import { IoAdd } from "react-icons/io5";

import Modal from '../Modal/Modal';

import { ProjectContext } from '../../context/ProjectListContext';

import FormInfo from '../FormInfo/FormInfo';
import IntroPage from '../IntroPage/IntroPage';

import {ClipLoader,BarLoader} from 'react-spinners'
import { HiOutlineTrash } from "react-icons/hi2";
import axios from 'axios';


const CreateProject = () => {
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [mountComponent,setMountComponent]=useState(false)

    const [loadProjectData,setLoadProjectData]=useState({})
    const {projectData,loader}=useContext(ProjectContext)
    const [isData,setIsData]=useState(false)

    const [hoverIndex,setHoverIndex]=useState(null)
    const [delLoader,setDelLoader]=useState(false)
    
    

    const handleOpen=()=>{
        setIsModalOpen(true)
        setMountComponent(true)
    }

    const handleClose=()=>{
        setIsModalOpen(false)
    }

    // console.log(loadProjectData)

    const loadData= async (project)=>{
        

        await setLoadProjectData(project)
        
        setIsData(true)
        
        

    }
    // console.log(projectData)

    const deleteProject=async (projectID)=>{
        // console.log(projectID)
        setDelLoader(true)
        try {


            const response=await axios.delete(`https://formflow-api.vercel.app/${projectID}`)
            
            if(response){
                window.location.reload()
            }

        } catch (error) {
            console.log(error)
            setDelLoader(false)
            
        }

    }
    


    return (
        <>
            <main className='' >
                <section className='bg-white w-2/12 h-screen float-left createProject-sec '>
                    <div className='flex justify-center items-center'> 
                        <button  onClick={handleOpen} className='add-btn w-4/5 py-2 my-3 flex justify-center'><IoAdd className='w-6 h-6 mx-1'/> Add New</button>
                    </div>
                    { mountComponent &&
                        <Modal isOpen={isModalOpen} isClose={handleClose}/>
                    }

                    <hr />



                    <div className='project-data'>
                        { loader? <div className='w-full  flex justify-center'><BarLoader size={20} color='black'/></div>:
                            projectData.map((project,index)=>(
                                
                                <li key={index} className=''
                                    onMouseEnter={()=>setHoverIndex(index)}
                                    onMouseLeave={()=>setHoverIndex(null)}
                                >
                                <button className='w-full capitalize text-left pl-4 flex justify-between' onClick={()=> loadData(project)}>{project.projectname}

                                {
                                    hoverIndex === index && (

                                        <button 
                                            onClick={(e)=>{
                                                e.stopPropagation()
                                                deleteProject(project._id)

                                            }}
                                        
                                        
                                        >{delLoader ? <ClipLoader size={10}/>:<HiOutlineTrash className='text-gray-300 hover:text-gray-700'/>}
                                        </button>

                                    )
                                }
                                 
                                 
                                </button>
                                

                                
                                
                                </li>
                               
                            ))
                        }
                    </div>



                </section>

                <section >
                    { 
                        !isData ? <IntroPage/>:<FormInfo loadProjectData={loadProjectData} />

                    }
                    
                    

                </section>
            </main>
        </>
    );
};

export default CreateProject;