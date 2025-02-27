import { useGlobalContext } from "../context/GlobalContext"
import { useEffect,useState } from "react"
import { useParams, NavLink} from "react-router-dom"
import StarsRating from "../components/StarsRating"

function SpecialitiesPage() {
  const {id} = useParams()
  const {specialityData, fechSpecialityById} = useGlobalContext()
  const [searchTerm, setSearchTerm] = useState('')

  console.log(specialityData)

  useEffect(() => {fechSpecialityById(id),window.scrollTo(0, 0)}, [id])

  const handlerChange = (e) => {
   setSearchTerm(e.target.value)
  }

  const filteredDoctors = specialityData.filter(doc => {
  
    return doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.name_speciality.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <section className="container mx-auto mt-[100px]"> 

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
              placeholder="Trova un dottore in base al nome e cognome..."
              name="search"
              onChange={handlerChange}
              required />

            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-teal-500 hover:bg-teal-500 focus:ring-1 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Search</button>
          </div>
        </form>

              {filteredDoctors.length === 0 ? 
                <div className="border bg-gray-200 text-center mb-5 mt-5">
                  <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3 mt-4 text-center">
                    Non c'è nessun medico con questo nome nella categoria da te scelta, prova a cercare <NavLink to='/advance' className="transition-all duration-300 hover:scale-110 text-teal-600">qui !</NavLink>
                   </h3> 
                 </div>
                  : 
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3 mt-10 text-center"> Ecco i medici appartenenti alla categoria da te scelta</h3> 
               }

        <div className="px-1 flex justify-center my-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredDoctors?.map((special,index) => {
               const {image_url, surname, name, name_speciality, average_vote,id} = special
               return (
                  <div className="w-full h-[500px] bg-white border border-gray-200 rounded-lg shadow-sm" key={index}>
                     <div className="h-[60%]">
                        <img className=" object-top rounded hp-doctor-img " src={image_url} alt={`Doctor ${surname} ${name} image`} />
                      </div>
                     <div className="h-[40%] flex flex-col items-between justify-center">
                       <div className="p-4">
                         <h5 className="text-xl font-semibold tracking-tight text-gray-900">{`${name} ${surname}`}</h5>
                         <span className="text-gray-900">{name_speciality}</span>
                          <div className="mt-4 flex justify-between items-center flex-wrap">
                            <StarsRating ratingVote={average_vote} />

                            <button className="justify-center mt-4">
                              <NavLink to={`/doctor/${id}`} className="text-teal-50 bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Dettagli</NavLink>
                            </button>
                         </div>
                       </div>
                      </div>
                    </div >
                )
              })}
          </div>
        </div>
    </section>  
  )
}

export default SpecialitiesPage