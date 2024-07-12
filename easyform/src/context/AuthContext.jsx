import {Children,createContext, useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode'

import {useNavigate} from 'react-router-dom'


export const AuthContext=createContext()

export const AuthProvider=({children})=>{

    const [isAuth,setIsAuth]=useState(false)
    const [tokenData,setTokenData]=useState(null)

    const navigate=useNavigate()

    useEffect(()=>{
        const token=localStorage.getItem('token')

        if (token){
            try{

                const decodeToken=jwtDecode(token)
    
                if(decodeToken.exp*1000 > Date.now()){
                    setIsAuth(true)
                    setTokenData(decodeToken)
                }else{
                    localStorage.removeItem('token')
                }

            }catch(err){
                localStorage.removeItem('token')

            }
        }

    },[])
    

    const login=(token)=>{
        localStorage.setItem('token',token)
        setIsAuth(true)
        const decodeToken=jwtDecode(token)
        setTokenData(decodeToken)
        // console.log(tokenData)
        const userID=tokenData.id;
        navigate(`/user/${userID}`)
    }

    const logout=()=>{
        localStorage.removeItem('token')
        setIsAuth(false)
        setTokenData(null)

    }
    


    return(

        <>
            <AuthContext.Provider value={{isAuth,login,logout,tokenData}}>
                {children}
            </AuthContext.Provider>
        
        </>
    )
};

