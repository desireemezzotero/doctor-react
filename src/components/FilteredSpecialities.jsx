import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";

function FilteredSpecialities() {
  const {speciality,fechSpecialityById, } = useGlobalContext()

  const handlerClick = (e) => {
   console.log(e.target.value)
   fechSpecialityById(e.target.value)
  }

  useEffect(() => {fechSpecialityById()}, [])

  return (
    <form action="">
      <div className="flex items-center justify-center p-4">
        <div className="relative group">

          {/* Bottone per aprire la sidebar */}
          <button
            id="dropdown"
            className="text-white bg-teal-500 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
            type="button">
            <FontAwesomeIcon icon={faSliders} className="text-white" size="1x" />
          </button>

          {/* Dropdown menu */}
          <div id="dropdownNavbar" className="absolute hidden group-focus-within:block group-hover:block z-10 w-56 p-3 bg-white rounded-lg shadow" >

               {/* Specializzazione */}
                 <button id="dropdownNavbarLink" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 mb-3 text-sm font-medium" > Specializzazione
                   <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" >
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                   </svg>
                  </button>

                <ul className="space-y-2 text-sm">
                   {speciality.map((speciali) => {
                     return (
                      <li className="flex items-center" key={speciali.id}>
                        <input
                         id={`speciality-${speciali.id}`}
                         type="checkbox"
                         value={speciali.id}
                         className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                         onClick={handlerClick}
                         />
                        <label htmlFor={`speciality-${speciali.id}`} className="ml-2 text-sm text-gray-900" >
                          {speciali.name}
                        </label>
                      </li>
                     );
                    })}
                 </ul>


            {/* recensioni */}
            <button id="dropdownNavbarLink" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 mb-3 text-sm font-medium" > Recensioni
              <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            {/*  <ul className="space-y-2 text-sm">
                   {speciality.map((speciali) => {
                     return (
                      <li className="flex items-center" key={speciali.id}>
                        <input
                         id={`speciality-${speciali.id}`}
                         type="checkbox"
                         value={speciali.id}
                         className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                         />
                        <label htmlFor={`speciality-${speciali.id}`} className="ml-2 text-sm text-gray-900" >
                          {speciali.name}
                        </label>
                      </li>
                     );
                    })}
                 </ul> */}
          </div>
        </div>
      </div>
    </form>

  )
}

export default FilteredSpecialities