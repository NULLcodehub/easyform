import React, { useEffect, useState } from 'react';
import './FormInfo.css'
import { useLoaderData, useParams } from 'react-router-dom';
import axios from 'axios';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const FormInfo =({loadProjectData}) => {

    const {projectname,_id,form_api_key}=loadProjectData
    // console.log(_id)
    // const [projectID,setProjectID]=useState(null)
    // const [formData,setFormData]=useState(null)

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

    // setProjectID(_id)
    // console.log(projectID)

    useEffect(()=>{
    
        const formDataFetch=async ()=>{
            try {
                const response=await axios.get(`http://localhost:4000/form/${_id}`)    
                    setFormData(response.data)
                
            } catch (error) {
                console.log(error)
            }
        }

       formDataFetch()


    },[])


    // console.log(formData)



    
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


                                <div className='form mx-5 my-5 bg-white p-5 h-55vh rounded-lg'>
                                    
                                </div> 
                        </section>

                }


                {
                    visiableCode &&
                    <>
                        <section className=' h-80vh codeExampleMain'>
                            <div className='bg-white mx-5 my-5 h-65vh rounded-lg p-7'>
                                <SyntaxHighlighter language='javascript' style={okaidia} className='h-full'>
                                    
                                </SyntaxHighlighter>
                            </div>
                        </section>
                    
                    </>

                }
                
            </main>
        </>
    );
};

export default FormInfo;