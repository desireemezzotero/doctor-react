import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";

import CarouselHomePage from "../components/CarouselHomePage";
import CardHomePage from "../components/CardHomePage";
import aboutImg from "../assets/img/about.jpg"
import { NavLink } from "react-router-dom";
import doctor from "../assets/img/doctor.png"

function HomePage() {
  const { fechDataDoctors, doctorsData, speciality } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState('');

  const handlerChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtra i dottori in base al termine di ricerca
  const filteredDoctors = doctorsData.filter(doc => {
    return doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.name_speciality.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Ordina i dottori in base alla recensione media e seleziona i primi 10
  const topDoctors = filteredDoctors
    .sort((a, b) => b.averageVote - a.averageVote)
    .slice(0, 10);

  useEffect(fechDataDoctors, []);

  return (
    <>
      <section>
        <CarouselHomePage />
      </section>

      <section className="container mt-[50px] mx-auto ">
        <div className="border-l-4 border-teal-500 h-10 flex items-center mb-10">
          <h3 className="text-2xl pl-2 font-semibold tracking-tight text-gray-900">I nostri servizi</h3>
        </div>

        <div className="flex flex-col-reverse md:flex-row bg-white h-auto xl:mx-[250px] md:mx-[150px] md:h-[200px] rounded-lg">
          <div className="w-full md:w-[75%] flex items-center p-4 md:p-6 ">
            <div className="pl-5 md:pl-0 md:text-left md:ml-4">
              <p className="mb-2">
                <span className="font-bold"> Bdoctors </span>
                è una piattaforma innovativa progettata per favorire l'incontro tra pazienti e medici specialisti.
              </p>

              <p className="mb-2">
                <span className="font-bold"> Sei un medico? </span><br />
                Iscriviti anche tu sulla nostra piattaforma.
              </p>

              <p className="mb-2">
                <span className="font-bold"> Sei un paziente? </span><br />
                Trova il medico giusto in modo semplice e veloce.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[35%] h-[200px] md:h-full">
            <img src={aboutImg} className="object-cover object-top rounded w-full h-full md:object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg" />
          </div>
        </div>
      </section>

      <div className="items-center justify-center text-center content-center mt-[50px] bg-gray-200 pb-[50px] pt-[50px]">
        <div className="container mx-auto">
          <div className="border-l-4 border-teal-500 h-10 flex items-center mb-4">
            <h3 className="text-2xl pl-2 font-semibold tracking-tight text-gray-900">Le specializzazioni più ricercate</h3>
          </div>

          <div className="flex-wrap grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">

            {speciality?.map(special => {
              return (
                <NavLink key={special?.id} to={`/speciality/${special.id}`}>
                  <div className="flex flex-col items-center justify-center bg-gray-200 transition-all duration-100 hover:scale-105 hover:bg-gray-100 hover:shadow-xl h-[220px] w-[150px] mt-6">

                    <div className="">
                      <img src={special.icon} className="object-cover w-full h-full"></img>
                    </div>
                    <p className="text-center">
                      <span className="text-gray-900 font-bold">{special?.name}</span>
                    </p>
                    <p className="text-center mt-2">
                      {special?.description}
                    </p>
                  </div>
                </NavLink>
              )
            })}
          </div>
        </div>
      </div>

      <section className="container  mt-[50px] mx-auto">
        <div className="border-l-4 border-teal-500 h-10 flex items-center mb-4">
          <h3 className="text-2xl pl-2 font-semibold tracking-tight text-gray-900">I medici più ricercati</h3>
        </div>
        <div className="px-1 flex justify-center my-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {topDoctors.map(doctor => (
              <CardHomePage key={doctor.id} data={doctor} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="border-l-4 border-teal-500 h-10 flex items-center mb-4">
          <h3 className="text-2xl pl-2 font-semibold tracking-tight text-gray-900">Sei un dottore?</h3>
        </div>

        <div className="bg-teal-500 mx-[200px] border rounded-2xl mb-5">
          <div className="h-[250px] flex text-white justify-center items-center ">

            <div className="w-[40%]">
              <img src={doctor} alt="" className="w-52" />
            </div>

            <div>
              <p className="text-lg">Sei un medico? Iscriviti ora e fai crescere la tua attività!Con la registazione, potrai ricevere prenotazione online dai pazienti e ottenere maggiore visibilità grazie ad un profilo personale dedicato. Non perdere questa opportunità! </p>
            </div>
          </div>

          <NavLink to="/new-doctor">
            <div className="h-[50px] bg-white border rounded-lg flex justify-center items-center hover:bg-gray-100">
              <h3 className="text-lg pl-2 font-semibold tracking-tight text-gray-900">ISCRIVITI ORA!</h3>
            </div>
          </NavLink>
        </div>
      </section>

    </>
  );
}

export default HomePage;

