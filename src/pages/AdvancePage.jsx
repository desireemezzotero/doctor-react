import { useGlobalContext } from "../context/GlobalContext"
import { useEffect, useState } from "react"

import CarouselHomePage from "../components/CarouselHomePage"
import CardHomePage from "../components/CardHomePage"

function AdvancePage() {
  const { fechDataDoctors, doctorsData } = useGlobalContext()
  const [searchTerm, setSearchTerm] = useState('')

  const handlerChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredDoctors = doctorsData.filter(doc => {
    if (doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || doc.surname.toLowerCase().includes(searchTerm.toLowerCase()) || doc.name_speciality.toLowerCase().includes(searchTerm.toLowerCase())) {
      return doc
    }
  })

  useEffect(fechDataDoctors, [])

  return (
    <>
      <section className="container mt-[130px] m-auto">
        <form className="max-w-md mx-auto">
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

            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-teal-500 hover:bg-teal-500 focus:ring-1 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Search</button>
          </div>
        </form>

        <div className="container px-1 flex justify-center my-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDoctors.map(doctor => (
              <CardHomePage key={doctor.id} data={doctor} />
            ))}
          </div>
        </div>
      </section>
    </>

  )
}

export default AdvancePage