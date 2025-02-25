import { createContext, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext() 

const GlobalProvider = ({children}) => {
  //importazione apiUrl
  const apiUrl = import.meta.env.VITE_API_URL
 
  //funzione per la index
  const fechDataDoctors = () => {
    axios.get(apiUrl)
    .then(res => 
      console.log(res.data)
    )
    .catch(err => {
      console.log(err)
    });
  }
  
  const value = {
    fechDataDoctors
  }

  return (
    <GlobalContext.Provider value= {value}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext (GlobalContext)
}

export {
  useGlobalContext,
  GlobalProvider
}