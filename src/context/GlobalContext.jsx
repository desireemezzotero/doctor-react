import { createContext, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
  //importazione apiUrl
  const apiUrl = import.meta.env.VITE_API_URL
  const [doctorsData, setDoctorsData] = useState([]);
  const [doctorData, setDoctorData] = useState([])

  //funzione per la index
  const fechDataDoctors = () => {
    axios.get(apiUrl)
      .then(res => {
        setDoctorsData(res.data);
      })
      .catch(err => {
        console.log(err)
      });
  }

  //funzione per stampare un dottore
 const fechDataDoctor = (id) => {
  axios.get(`${apiUrl}/${id}`)
  .then(res => {
    setDoctorData(res.data)
  })
  .catch(err => {
    console.log(err)
  })
 }

  const value = {
    fechDataDoctors,
    doctorsData,
    doctorData,
    fechDataDoctor
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export {
  useGlobalContext,
  GlobalProvider
}