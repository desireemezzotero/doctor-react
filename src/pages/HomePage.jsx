import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";

import CarouselHomePage from "../components/CarouselHomePage";
import CardHomePage from "../components/CardHomePage";
import aboutImg from "../assets/img/about.jpg"

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

      <section className="container mt-[50px] mx-auto">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-10 mt-10 text-center">Cosa offriamo</h3>

        <div className="flex bg-white h-[200px] xl:mx-[170px] md:mx-[50px]">
          <div className=" w-[75%] flex items-center">
            <p className="pl-5">BDoctors è una piattaforma innovativa progettata per favorire l'incontro tra pazienti e medici specialisti. <br></br>
              <span className="font-bold"> Sei un medico? </span>Aggiungiti anche tu sulla nostra piattaforma.<br></br>
              <span className="font-bold"> Sei un paziente? </span>Trova il medico giusto in modo semplice e veloce.</p>
          </div>
          <div className="w-[35%] h-full">
            <img src={aboutImg} className="w-full h-full object-fix" />
          </div>
        </div>
      </section >

        <div className="items-center justify-center text-center content-center mt-[50px] bg-gray-200 py-[50px]">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Le specializzazioni dei nostri dottori</h3>
          <div className="container mx-auto">
              <div className=" p-4 border rounded-lg flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">

               {speciality?.map(special => {
                return (
                  <div key={special?.id} className="w-full md:w-full lg:w-1/2 flex flex-col items-center justify-center">
                    <img src={special.icon} className="w-[50px] h-[50px] mb-3 "></img>
                    <p className="text-center">
                     <span className="text-gray-900 font-bold">{special?.name}</span>
                    </p>
                  </div>
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

