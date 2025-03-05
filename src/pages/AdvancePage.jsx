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

        <div className="flex justify-center items-center">
          <form className="w-[700px] ml-3">
            <input
              type="text"
              id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500  focus:border-teal-500"
              placeholder="Cerca un dottore..."
              name="search"
              onChange={handlerChange}
              required />
          </form>

          <FilteredSpecialities updateFilterDoctors={updateFilterDoctors} />

        </div>

        {filteredDoctors.length === 0 ?
          <div className="border bg-gray-200 text-center mb-5 mt-5">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3 mt-4 text-center">
              Non c'è nessun medico secondo la sua ricerca
            </h3>
          </div>
          :
          <div className="border-l-4 border-teal-500 h-10 flex items-center my-4">
            <h3 className="text-2xl pl-2 font-semibold tracking-tight text-gray-900">Tutti i medici della piattaforma</h3>
          </div>
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