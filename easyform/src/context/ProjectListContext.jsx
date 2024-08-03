import axios from "axios";
import { createContext, useState, Children, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProjectContext=createContext()

export const ProjectConstextProvider=({children})=>{
    const [projectData,setProjectData]=useState([])
    const [loader,setLoader]=useState(false)

    const {userID}=useParams()
    
    useEffect(()=>{

        const fetchData= async()=>{
            setLoader(true)
            try {

                const response=await axios.get(`https://formflow-api.vercel.app/projects/${userID}`)
                // console.log(response.data)
                setProjectData(response.data)
                setLoader(false)
            } catch (error) {
                console.log(err)
                setLoader(false)
            }

        }
        fetchData()

    },[])

    


    const addProjectData=(project)=>{
        setProjectData([project,...projectData])

    }

    // console.log(projectData)

    

    return (
        <ProjectContext.Provider value={{addProjectData,projectData,loader}}>
            {children}
        </ProjectContext.Provider>
    )


}