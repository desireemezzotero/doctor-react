import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";

import CarouselHomePage from "../components/CarouselHomePage";
import CardHomePage from "../components/CardHomePage";

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

      <section className="container mt-[50px] m-auto">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-10 mt-10 text-center">Cosa offriamo</h3>
        <div className="flex content-center mx-[200px] h-[300px] bg-white">
          <div className="w-[60%] p-10">
            <p>BDoctors è una piattaforma innovativa progettata per favorire l'incontro tra pazienti e medici specialisti.

              Il nostro obiettivo è garantire che ogni paziente abbia accesso a una vasta rete di professionisti qualificati, ma anche alla possibilità di valutare la qualità delle prestazioni ricevute.

              Con BDoctors, i pazienti possono trovare il medico giusto in modo semplice e veloce, mentre i medici hanno l'opportunità di entrare in contatto con nuove persone e di costruire una reputazione basata sulle recensioni reali dei propri pazienti. In questo modo, lavoriamo insieme per creare un sistema sanitario più trasparente, accessibile e di qualità.</p>
          </div>
          <div className="w-[40%] about-img">

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

