import { createContext, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
  //importazione apiUrl
  const apiUrl = import.meta.env.VITE_API_URL
  const [doctorsData, setDoctorsData] = useState([]);
  const [doctorData, setDoctorData] = useState([])
  const [speciality, setSpeciality] = useState([])
  const [specialityData, setSpecialityData] = useState([])

  //funzione per la index
  const fechDataDoctors = () => {
    axios.get(apiUrl)
      .then(res => {
        setDoctorsData(res.data.doctors)
        setSpeciality(res.data.speciality)
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

 //funzione per stamapre i dottori con quella specializzazione 
  const fechSpecialityById = (id) => {
    axios.get(`${apiUrl}/speciality/${id}`)
    .then(res=> {
      setSpecialityData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const value = {
    fechDataDoctors,
    doctorsData,
    doctorData,
    fechDataDoctor,
    setSpeciality,
    speciality,
    fechSpecialityById,
    specialityData
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