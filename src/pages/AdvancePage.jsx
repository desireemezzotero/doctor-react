import { useGlobalContext } from "../context/GlobalContext"

import { useEffect, useState } from "react";

import CardHomePage from "../components/CardHomePage"
import FilteredSpecialities from "../components/FilteredSpecialities";


function AdvancePage() {
  const { fechDataDoctors, specialityData, setSpecialityData, doctorsData} = useGlobalContext()

  const [searchTerm, setSearchTerm] = useState('')
  const [filterDoctors, setFilterDoctors] = useState([])

  const handlerChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const updateFilterDoctors = (doctor) => {
    setFilterDoctors(doctor)
  }
  
  const filteredDoctors = filterDoctors.filter(doc => {
    if (doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || doc.surname.toLowerCase().includes(searchTerm.toLowerCase())) {
      return doc
    }
  })

  console.log(specialityData)

  useEffect(() => {
    fechDataDoctors();
    setSpecialityData([]);
  }, []);

  return (
    <>
      <section className="container mt-[130px] m-auto">

        <div className="flex justify-around align-middle">
          <form>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>

              <input
                type="text"
                id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500  focus:border-teal-500"
                placeholder="Cerca un dottore..."
                name="search"
                onChange={handlerChange}
                required />
            </div>
          </form>

         <FilteredSpecialities updateFilterDoctors={updateFilterDoctors}/>
          
        </div> 
        
          {filteredDoctors.length === 0 ? 
                <div className="border bg-gray-200 text-center mb-5 mt-5">
                  <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3 mt-4 text-center">
                    Non c'è nessun medico secondo la sua ricerca
                   </h3> 
                 </div>
                  : 
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3 mt-10 text-center"> Ecco tutti i medici iscritti </h3> 
               }
               
        <div className="container px-1 flex justify-center my-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {specialityData.length === 0 ?
              filteredDoctors.map(doctor => (
                <CardHomePage key={doctor.id} data={doctor} />
              )) : specialityData.map(doctor => (
                <CardHomePage key={doctor.id} data={doctor} />
              ))}
          </div>
        </div>
      </section>
    </>

  )
}

export default AdvancePage