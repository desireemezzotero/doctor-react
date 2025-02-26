import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";

import CarouselHomePage from "../components/CarouselHomePage";
import CardHomePage from "../components/CardHomePage";
import aboutImg from "../assets/img/about.jpg"

function HomePage() {
  const { fechDataDoctors, doctorsData } = useGlobalContext();
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
    .slice(0, 8);

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
           <img src={aboutImg} className="w-full h-full object-fix"/> 
          </div>
        </div>

        <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3 mt-10 text-center">I medici più ricercati</h3>
        <div className="px-1 flex justify-center my-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {topDoctors.map(doctor => (
              <CardHomePage key={doctor.id} data={doctor} />
            ))}
          </div>
        </div>
      </section >
    </>
  );
}

export default HomePage;

