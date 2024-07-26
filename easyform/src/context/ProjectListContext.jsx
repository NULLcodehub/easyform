import axios from "axios";
import { createContext, useState, Children, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProjectContext=createContext()

export const ProjectConstextProvider=({children})=>{
    const [projectData,setProjectData]=useState([])

    const {userID}=useParams()
    
    useEffect(()=>{

        const fetchData= async()=>{

            try {

                const response=await axios.get(`http://localhost:4000/projects/${userID}`)
                // console.log(response.data)
                setProjectData(response.data)
            } catch (error) {
                console.log(err)
            }

        }
        fetchData()

    },[])

    


    const addProjectData=(project)=>{
        setProjectData([project,...projectData])

    }

    // console.log(projectData)

    

    return (
        <ProjectContext.Provider value={{addProjectData,projectData}}>
            {children}
        </ProjectContext.Provider>
    )


}