import axios from "axios";
import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import { Navigate } from "react-router-dom";

export const userContext=createContext()

export function UserContextProvider({children}) {

    const [users,setUsers]=useState(null)
    const [ready,setReady]=useState(false)
   
   
    useEffect(()=>{
    
        (async()=>{
         if(!users){
          const {data}=await axios.get('/getdata',{headers:{'usertoken':localStorage.getItem('usertoken')}})
          if(data.status==='success'){
            setUsers(data.userData)
           
          }
          
         }
         setReady(true)
    
        })()
        
       
    },[])

    // if(ready && !users){
    //     return <Navigate to={'/login'}/>
    // }

  return (
     <userContext.Provider value={{users,setUsers,ready}}>
        {children}
     </userContext.Provider>
  )
}

