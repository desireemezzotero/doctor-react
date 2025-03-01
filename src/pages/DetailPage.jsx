import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Reviews from "../components/Reviews";

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

      <div className="flex items-center container mx-auto justify-center">
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
     
      {reviews?.[0]?.name !== null ? (
        <div className="mt-4">
          <Reviews reviews = {reviews} average_vote={average_vote} doctorId={id} doctorName={doctorName} doctorSurname={doctorSurname}/>
        </div>) : (
        <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3 text-center">
          Nessun utente ha lasciato una recensione!
        </h3>
       )}

    </div >
  );
}

export default DetailPage;
