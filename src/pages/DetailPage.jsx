import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import StarsRating from "../components/StarsRating";
import NewReviewForm from "../components/NewReviewForm";

function DetailPage() {
  const { id } = useParams();
  const { doctorData, fechDataDoctor } = useGlobalContext();

  const { doctorName, doctorSurname, doctorTelephone, doctorMail, image_url, address, average_vote, specializations, reviews } = doctorData;

  useEffect(() => {
    fechDataDoctor(id),
      window.scrollTo(0, 0)
  }, [id]);

  return (
    <div className="container mx-auto pt-[50px] mb-10">
      <div className="doctor-card flex flex-wrap items-center justify-center gap-5">
        <div className="mr-[40px]">
          <img className="rounded max-w-[450px] max-h-[300px]" src={image_url} alt={`Doctor ${doctorName} ${doctorSurname} image`} />
        </div>

        <div className="p-4 align-middle">
          <h3 className="text-3xl font-semibold tracking-tight text-gray-900">{`${doctorName} ${doctorSurname}`}</h3>
          <div className="description-doctor text-lg pt-5">
            <p className="mb-3">
              <FontAwesomeIcon icon={faPhone} className="text-black" size="1x" />
              <span className="text-gray-900 pl-3">{doctorTelephone}</span>
            </p>

            <p className="mb-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-black" size="1x" />
              <span className="text-gray-900 pl-3">{doctorMail}</span>
            </p>

            <p className="mb-3">
              <FontAwesomeIcon icon={faLocationDot} className="text-black" size="1x" />
              <span className="text-gray-900 pl-3">{address}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center container mx-auto justify-center xl:mx-[170px] md:mx-[50px]">
        <div className="p-4 w-full border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
          <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Specializzazioni:</h3>
          {specializations?.map((speciality) => (
            <div key={speciality?.specialityName} className="flex">
              <img src={speciality?.specialityIcon} className="w-[50px] h-[50px] mb-3" alt={speciality?.specialityName} />
              <p>
                <span className="text-gray-900 ml-7 font-bold">{speciality?.specialityName}: </span>
                <span className="text-gray-900 ml-2">{speciality?.specialityDescription}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3 text-center mt-5">Recensioni:</h3>
      {reviews?.[0]?.name !== null ? (

        <div className="mt-4 mx-auto xl:mx-[170px] md:mx-[50px]">
          <div className="w-[100%] py-3 text-center bg-gray-100">
            <h4 className="font-bold">Voto medio:</h4>
            <StarsRating ratingVote={average_vote} />
          </div>
          <div className="p-4 border flex w-full border-gray-200 rounded-lg shadow-sm">


            <div className="flow-root" id="#reviews">
              <ul role="list" className="divide-y divide-gray-200">
                {reviews?.map(review => {
                  return (
                    <li className="py-3 sm:py-4" key={review.id}>
                      <div className="flex items-center">

                        <div className="shrink-0 mr-3">
                          <FontAwesomeIcon icon={faUser} className="text-black w-8 h-8" />
                        </div>

                        <div>
                          <div className="font-bold flex items-center justify-between">{review.title}:
                            <span className="mb-2">
                              <StarsRating ratingVote={review.vote} />
                            </span>
                          </div>
                          <p className="text-[10px]"> {review.date}</p>
                          <p className="font-bold text-[13px]">{review.name}</p>
                          <p>{review.description}</p>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>) : (
        <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3 text-center">
          Nessun utente ha lasciato una recensione!
        </h3>
      )}
      <NewReviewForm doctorId={id} />
    </div >
  );
}

export default DetailPage;
