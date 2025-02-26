import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
function DetailPage() {
  const { id } = useParams()
  const { doctorData, fechDataDoctor } = useGlobalContext()
  const { doctorName, doctorSurname, doctorTelephone, doctorMail, image_url, address, average_vote, specializations, reviews } = doctorData

  useEffect(() => { fechDataDoctor(id) }, [id])

  return (
    <div className="container mx-auto pt-[50px] mb-10">
      <div className="doctor-card flex flex-wrap items-center justify-center gap-5">
        <div className=" mr-[40px]">
          <img className="rounded max-w-[450px] max-h-[300px]" src={image_url} alt={`Doctor ${doctorName} ${doctorSurname} image`} />
        </div>


        <div className="p-4 align-middle">
          <h3 className="text-3xl font-semibold tracking-tight text-gray-900">{`${doctorName} ${doctorSurname}`}</h3>
          <div className="description-doctor text-lg pt-5">

            <p className="mb-3">
              <FontAwesomeIcon icon={faPhone} className="text-black " size="1x" />
              <span className="text-gray-900 pl-3">{doctorTelephone}</span>
            </p>

            <p className="mb-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-black " size="1x" />
              <span className="text-gray-900 pl-3">{doctorMail}</span>
            </p>

            <p className="mb-3">
              <FontAwesomeIcon icon={faLocationDot} className="text-black " size="1x" />
              <span className="text-gray-900 pl-3">{address}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 ">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Specializzazioni:</h3>
            {specializations?.map(speciality => {
              return (
                <div key={speciality?.specialityName} className="flex">
                  <img src={speciality?.specialityIcon} className="w-[50px] h-[50px] mb-3"></img>
                  <p>
                    <span className="text-gray-900 ml-7 font-bold">{speciality?.specialityName}: </span>
                    <span className="text-gray-900s ml-2">{speciality?.specialityDescription}</span>
                  </p>
                </div>
              )
            })}
          </div>
        </div>

      </div>


      <div className="flex items-center justify-center mt-[50px]">
        <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 ">
          <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Recensioni:</h3>

          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200">

              {reviews?.map(review => {
                return (
                  <li className="py-3 sm:py-4" key={review.id}>
                    <div className="flex items-center">

                      <div className="shrink-0 mr-3">
                        <FontAwesomeIcon icon={faUser} className="text-black w-8 h-8" />
                      </div>

                      <div>
                        <p className="text-sm"> {review.date}</p>
                        <p className="font-bold">{review.name}</p>
                        <p className="font-bold flex">{review.title}: {review.vote} </p>
                        <p>{review.description}</p>
                      </div>
                    </div>
                  </li>
                )
              }
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage

