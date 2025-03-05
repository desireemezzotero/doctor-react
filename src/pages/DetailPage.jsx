import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Reviews from "../components/Reviews";

function DetailPage() {
  const { id } = useParams();
  const { doctorData, fechDataDoctor } = useGlobalContext();

  const { doctorName, gender, doctorSurname, doctorTelephone, doctorMail, image_url, address, average_vote, specializations, reviews } = doctorData;

  useEffect(() => {
    fechDataDoctor(id),
      window.scrollTo(0, 0)
  }, [id]);

  return (
    <section className="container mx-auto pt-[50px]">
      <div className="border-l-4 border-teal-500 h-10 flex items-center mb-[50px]">
        {gender === "F" ?
          <h3 className="text-2xl pl-2 font-semibold tracking-tight text-gray-900">Dettagli Dottoressa</h3>
          :
          <h3 className="text-2xl pl-2 font-semibold tracking-tight text-gray-900">Dettagli Dottore</h3>
        }
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-6 p-4 items-center">

        <div className="flex justify-center lg:justify-start">
          <img className="w-full max-w-[300px]" src={image_url} alt={`Doctor ${doctorName} ${doctorSurname} image`} />
        </div>

        <div className="description-doctor text-lg mt-10 lg:mt-0 lg:col-span-1 mg:col-span-2">
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

        <div className="lg:col-span-1 mt-6 lg:mt-0 md-col-span-2">
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

      <div className="container rounded-lg border-2 shadow-md p-4 my-[50px]">
        <div>
          <Reviews reviews={reviews} average_vote={average_vote} doctorId={id} doctorName={doctorName} doctorSurname={doctorSurname} />
        </div>
      </div>
    </section >
  );
}

export default DetailPage;
