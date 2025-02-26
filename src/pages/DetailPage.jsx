import { useParams} from "react-router-dom"
import { useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContext"

function DetailPage() {
  const {id} = useParams()
  const {doctorData,fechDataDoctor} = useGlobalContext()
  const {doctorName, doctorSurname,doctorTelephone,doctorMail,image_url, address,average_vote, specializations, reviews} = doctorData

  useEffect(()=> fechDataDoctor(id),[])

  return (
  <div className="container mx-auto">
    <div className="w-full h-[500px] bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="h-[70%]">
                <img className="rounded" src={image_url} alt={`Doctor ${doctorName} ${doctorSurname} image`} />
            </div>
            <div className="h-[30%] flex flex-col items-between justify-center">
                <div className="p-4">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{`${doctorName} ${doctorSurname}`}</h5>
                    {specializations?.map(speciality => {
                      <div>
                      <img>{speciality?.specialityIcon}</img>
                      <span className="text-gray-900">{speciality?.specialityName}</span>
                      <span className="text-gray-900">{speciality?.specialityDescription}</span>
                      </div>
                    })}
                    <span className="text-gray-900">{doctorTelephone}</span>
                    <span className="text-gray-900">{doctorTelephone}</span>
                    <span className="text-gray-900">{doctorMail}</span>
                    <span className="text-gray-900">{address}</span>
                    <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">{average_vote}</span>
                        </div>
                        {reviews?.map(review=> {
                            <div>
                              <span className="text-gray-900">{review?.title}</span>
                              <span className="text-gray-900">{review?.description}</span>
                              <span className="text-gray-900">{review?.vote}</span>
                              <span className="text-gray-900">{review?.date}</span>
                            </div>
                         })}
                    </div>
                </div>
            </div>
        </div >

        <div>
          <h1>{doctorName}</h1>

        </div>
    </div>
  )
}

export default DetailPage