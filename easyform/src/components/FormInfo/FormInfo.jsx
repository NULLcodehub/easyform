import React from 'react';
import './FormInfo.css'
import { useLoaderData, useParams } from 'react-router-dom';
import axios from 'axios';

const FormInfo =  ({loadProjectData}) => {

    console.log(loadProjectData)

    const {projectname,_id,form_api_key}=loadProjectData

//    try {
//     const responce= axios.get('http://localhost:4000/')
    
//    } catch (error) {
//     console.log(error)
    
//    }


    
    return (
        <>
            <main className='w-10/12 float-right form-info'>
                <section className='bg-white px-8 py-10'>
                    {/* <div>{loadProjectData.projectname}</div> */}
                    <h1 className='text-2xl font-semibold uppercase'>{projectname}</h1>
                </section>


                <section className='w-full   my-5 '>
                    <div className='px-5 py-3 mx-5 form-api rounded-lg' >
                        <p className='py-2'>Form Endpoint</p>
                        <hr />
                        <p className='py-4 api-link mt-3'>{`localhost:4000/${_id}/form/${form_api_key}`}</p>
                    </div>
                </section>
            </main>
        </>
    );
};

export default FormInfo;