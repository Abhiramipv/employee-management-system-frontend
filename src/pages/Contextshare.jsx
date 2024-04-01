import React, { createContext, useState } from 'react'

export const registerContext=createContext()

export const deleteContext=createContext()

function Contextshare({children}) {

    const[registerdata,setRegisterData]=useState("")

    const[removedata,setRemoveData]=useState(registerdata)


  return (
    <>

    <registerContext.Provider value={{registerdata,setRegisterData}}>

      <deleteContext.Provider value={{removedata,setRemoveData}}>

        {children}

      </deleteContext.Provider>  

    </registerContext.Provider>
    
    </>
  )
}

export default Contextshare