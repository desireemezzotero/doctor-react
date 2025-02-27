import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";

import CarouselHomePage from "../components/CarouselHomePage";
import CardHomePage from "../components/CardHomePage";
import aboutImg from "../assets/img/about.jpg"
import { NavLink } from "react-router-dom";

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
      <section className="container mt-[50px] mx-auto px-4">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-10 mt-10 text-center">Cosa offriamo</h3>

        <div className="flex flex-col-reverse md:flex-row bg-white h-auto xl:mx-[170px] md:mx-[50px] md:h-[200px] rounded-lg shadow-md">
          <div className="w-full md:w-[75%] flex items-center p-4 md:p-6">
            <p className="pl-5 md:pl-0 md:text-left md:ml-4">
              BDoctors è una piattaforma innovativa progettata per favorire l'incontro tra pazienti e medici specialisti. <br />
              <span className="font-bold"> Sei un medico? </span>Iscriviti anche tu sulla nostra piattaforma.<br />
              <span className="font-bold"> Sei un paziente? </span>Trova il medico giusto in modo semplice e veloce.
            </p>
          </div>
          <div className="w-full md:w-[35%] h-[200px] md:h-full">
            <img src={aboutImg} className="object-cover object-top rounded w-full h-full md:object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg" />
          </div>
        </div>
      </section>

      <div className="items-center justify-center text-center content-center mt-[50px] bg-gray-200 py-[50px]">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Le specializzazioni dei nostri dottori</h3>
        <div className="container mx-auto">
          <div className=" p-4 border rounded-lg flex-wrap grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">

            {speciality?.map(special => {
              return (
                <NavLink to={`/speciality/${special.id}`}>
                  <div key={special?.id} className="w-full md:w-full lg:w-1/2 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110">
                    <div className="h-12 w-12">
                      <img src={special.icon} className="object-cover w-full h-full"></img>
                    </div>
                    <p className="text-center">
                      <span className="text-gray-900 font-bold">{special?.name}</span>
                    </p>
                  </div>
                </NavLink>
              )
            })}
          </div>
        </div>
      </div>

      <section className="container  mt-[50px] mx-auto">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3 mt-10 text-center">I medici più ricercati</h3>
        <div className="px-1 flex justify-center my-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {topDoctors.map(doctor => (
              <CardHomePage key={doctor.id} data={doctor} />
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

export default HomePage;

