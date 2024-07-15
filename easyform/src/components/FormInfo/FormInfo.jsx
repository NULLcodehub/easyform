import React, { useState } from 'react';
import './FormInfo.css'
import { useLoaderData, useParams } from 'react-router-dom';
import axios from 'axios';

const FormInfo =  ({loadProjectData}) => {

    // console.log(loadProjectData)

    const {projectname,_id,form_api_key}=loadProjectData

    const [visiableIntre,setVisiableIntre]=useState(true)
    const [visiableCode,setVisiableCode]=useState(false)

    const visiablehandelerIntregration=()=>{
        setVisiableIntre(true)
        setVisiableCode(false)
    }
    
    const visiablehandelerCodeExample=()=>{
        setVisiableCode(true)
        setVisiableIntre(false)
    }


    
    return (
        <>
            <main className='w-10/12 float-right form-info'>
                <section className='bg-white px-8 pt-10'>

                    <h1 className='text-2xl font-semibold uppercase'>{projectname}</h1>

                    <div className=' flex justify-normal items-end mt-6 pb-2  gap-6'>
                        <button onClick={visiablehandelerIntregration} className={`${visiableIntre && 'border-b-2 border-green-700'} py-2 px-2`} >Integraion</button>
                        <button onClick={visiablehandelerCodeExample} className={`${visiableCode && 'border-b-2  border-green-700'} py-2 px-2`}>Code example</button>
                    </div>
                </section>

                {
                    visiableIntre &&

                        <section className='w-full   my-5 '>
                                <div className='px-5 py-3 mx-5 form-api rounded-lg' >
                                    <p className='py-2'>Form Endpoint</p>
                                    <hr />
                                    <p className='py-4 api-link mt-3'>{`localhost:4000/${_id}/form/${form_api_key}`}</p>
                                </div>
                        </section>

                }

                {
                    visiableCode &&
                    <>
                        <div>
                            code example
                        </div>
                    
                    </>

                }
                
            </main>
        </>
    );
};

export default FormInfo;