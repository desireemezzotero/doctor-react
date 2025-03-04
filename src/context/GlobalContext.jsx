import { createContext, useState, useContext } from "react";
import axios from "axios";
import { data } from "react-router-dom";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
  //Importazione apiUrl
  const apiUrl = import.meta.env.VITE_API_URL;
  const [doctorsData, setDoctorsData] = useState([]);
  const [doctorData, setDoctorData] = useState([]);
  const [speciality, setSpeciality] = useState([]);
  const [specialityData, setSpecialityData] = useState([]);
  const [review, setReview] = useState([])

  //Funzione per stampare la lista completa dei dottori
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

  //Funzione per stampare un dottore
  const fechDataDoctor = (id) => {
    axios.get(`${apiUrl}/${id}`)
      .then(res => {
        setDoctorData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  //Funzione per stamapre i dottori con una determinata specializzazione 
  const fechSpecialityById = (id) => {
    axios.get(`${apiUrl}/speciality/${id}`)
      .then(res => {
        setSpecialityData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  //Funzione per aggiungere una nuova recensione
  const addReview = (id, reviewData) => {
    axios.post(`${apiUrl}/${id}/reviews`, reviewData, { headers: { 'content-Type': 'application/json' } })
      .then(res =>
        fechDataDoctor(id),
      )
      .catch(err =>
        console.log(err)
      )
  }

  //Funzione per aggiungere un nuovo dottore
  const addDoctor = (dataToSend) => {
    axios.post(apiUrl, dataToSend, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then( () => {
        console.log('dottore aggiunto')
      })
      .catch(err => {
        if(err.response && err.response.status === 500 ){
          alert ('email già registrata, inserirne un\'altra')
        }
      })
  }

  //Funzione per stampare i dottori con una determinata recensione 
  const fechSpecialityByReview = (id) => {
    axios.get(`${apiUrl}/reviews/${id}`)
    .then(res => {
      setReview(res.data)
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
    specialityData,
    addReview,
    addDoctor,
    fechSpecialityByReview
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