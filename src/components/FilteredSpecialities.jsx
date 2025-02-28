import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";

function FilteredSpecialities({updateFilterDoctors}) {
  const {speciality, doctorsData} = useGlobalContext()

  const [selected, setSelected] = useState([])
  const [selectedStar, setSelectedStar] = useState(null)
  const [expandedSection, setExpandedSection] = useState(null);

  //Funziona per le specializzazioni
  const handlerClick = (e) => {
   const {value,checked} = e.target

   if (checked) {
    setSelected((prev) => [...prev, value]);
   } else {
    setSelected((prev) => prev.filter(id => id !== value));
   }
  }

  //funzione per le recensioni
  const handleCheckboxChange = (e) => {
    const {value} = e.target
    setSelectedStar(value)
  }
  
  useEffect(() => {
    let filteredDoctors = doctorsData;

    // Filtro per specializzazione
    if (selected.length > 0) {
      filteredDoctors = filteredDoctors.filter((doctor) =>
        selected.some((specialityName) => doctor.name_speciality.includes(specialityName))
      );
    }

    // Filtro per recensione
    if (selectedStar !== null) {
      filteredDoctors = filteredDoctors.filter((doctor) => {
        const doctorRating = parseFloat(doctor.average_vote); // Assicurati che la valutazione sia un numero decimale
        const starRating = parseFloat(selectedStar); // Assicurati che selectedStar sia un numero decimale

        // Verifica che il voto del dottore sia compreso tra selectedStar e selectedStar + 1
        return doctorRating >= starRating && doctorRating < (starRating + 1);
      });
    }

    // Aggiorna la lista dei dottori filtrati
    updateFilterDoctors(filteredDoctors);

  }, [selected, doctorsData, selectedStar]);

  //Funzione per ripulire le stelline
  const handleDelete = (e) => {
    setSelectedStar(null)
  }

  //funzone per il menu toggle
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  return (
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
            <button id="dropdownNavbarLink" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 mb-3 text-sm font-medium" onClick= {() => toggleSection("speciality")} > Specializzazione
              <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${expandedSection === "speciality" ? "max-h-[1000px]" : "max-h-0"}`}>
              <ul className="space-y-2 text-sm">
                {speciality.map((speciali) => {
                  return (
                    <li className="flex items-center" key={speciali.id}>
                      <input
                       id={`speciality-${speciali.id}`}
                       type="checkbox"
                       value={speciali.name}
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
            </div>

            {/* recensioni */}
            <button id="dropdownNavbarLink" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 mb-3 text-sm font-medium"  onClick={() => toggleSection("reviews")}> Recensioni
              <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${expandedSection === "reviews" ? "max-h-[1000px]" : "max-h-0"}`}>
              <div className="flex items-center">
                 {[1, 2, 3, 4, 5].map((star) => (
                    <div className="flex items-center space-x-2" key={star}>
                      <input
                       id={`star-${star}`}
                       type="checkbox"
                       value={star}
                       onChange={handleCheckboxChange}
                       checked={selectedStar >= star}
                       className="hidden peer" // Aggiungiamo la classe peer per interagire con la stella
                     />
                       <label htmlFor={`star-${star}`} className="cursor-pointer">
                         <svg className= {`w-6 h-6 ${selectedStar >= star ? 'text-yellow-500' : 'text-gray-200'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20" >
                           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                         </svg>
                        </label> 
                    </div>
                 ))}
                <FontAwesomeIcon icon={faTrash} className="text-black pl-4 text-l" onClick={handleDelete}/>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FilteredSpecialities