import React, { useEffect, useState } from 'react';
import './FormInfo.css'
import { useLoaderData, useParams } from 'react-router-dom';
import axios from 'axios';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

import FormDataTable from '../FormDataTable/FormDataTable';

const FormInfo =({loadProjectData}) => {

    const {projectname,_id,form_api_key}=loadProjectData
   
    // const [projectID,setProjectID]=useState(null)
    const [formData,setFormData]=useState(null)

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


    },[_id])


    console.log(formData)




    const codeString=
    `// src/components/FormComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.example.com/submit', formData);// repleace  api with your FormFlow api end-point
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;

    `

    
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
                                    
                                    {formData && <FormDataTable formData={formData}/>}

                                    {/* {formData && <h1>{formData._id}</h1>} */}
                                </div> 
                        </section>

                }


                {
                    visiableCode &&
                    <>
                        <section className=' h-80vh codeExampleMain'>
                            <div className='bg-white mx-5 my-5 h-65vh rounded-lg p-7'>
                                <SyntaxHighlighter language='javascript' style={okaidia} className='h-full'>
                                    {codeString}
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