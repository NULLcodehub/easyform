import React, { useContext, useState } from 'react';
import './CreateProject.css'
import { IoAdd } from "react-icons/io5";

import Modal from '../Modal/Modal';

import { ProjectContext } from '../../context/ProjectListContext';

import FormInfo from '../FormInfo/FormInfo';
import IntroPage from '../IntroPage/IntroPage';

import {ClipLoader,BarLoader} from 'react-spinners'


const CreateProject = () => {
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [mountComponent,setMountComponent]=useState(false)

    const [loadProjectData,setLoadProjectData]=useState({})
    const {projectData,loader}=useContext(ProjectContext)


    const [isData,setIsData]=useState(false)

    

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
                                
                                <li key={index}><button className='w-full capitalize text-left pl-4' onClick={()=> loadData(project)}>{project.projectname}</button></li>
                               
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