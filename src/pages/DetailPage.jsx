import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

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
    <section className="container mx-auto pt-[50px]">
      <div className="border-l-4 border-teal-500 h-10 flex items-center mb-[50px]">
        <h3 className="text-2xl pl-2 font-semibold tracking-tight text-gray-900">Dettagli Dottore</h3>
      </div>

      <div className="mx-2 lg:flex lg:justify-around">

        <div className="md:flex">
          <div className="sm:flex sm:justify-center">
            <div className="max-w-[100%] lg:max-w-[350px]">
              <img className="w-full" src={image_url} alt={`Doctor ${doctorName} ${doctorSurname} image`} />
            </div>
          </div>

          <div className="description-doctor text-lg mt-10 md:ml-[100px]">
            <h3 className="text-3xl font-semibold tracking-tight text-gray-900">{`${doctorName} ${doctorSurname}`}</h3>
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

        <div className="pt-10 md:ml-10">
          <h3 className="text-3xl font-semibold tracking-tight text-gray-900 mb-5">Specializzazioni:</h3>
          {specializations?.map((speciality) => (
            <div key={speciality?.specialityName} className="flex mb-3">
              <img src={speciality?.specialityIcon} className="w-[50px] h-[50px] mr-4" alt={speciality?.specialityName} />
              <p>
                <span className="block text-gray-900 font-bold">{speciality?.specialityName}: </span>
                <span className="text-gray-900">{speciality?.specialityDescription}</span>
              </p>
            </div>
          ))}
        </div>

      </div>
      <div className="container">
        <div className="mt-[50px]">
          <Reviews reviews={reviews} average_vote={average_vote} doctorId={id} doctorName={doctorName} doctorSurname={doctorSurname} />
        </div>
      </div>
    </section >
  );
}

export default DetailPage;
