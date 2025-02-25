import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"

import CarouselHomePage from "../components/CarouselHomePage"
import CardHomePage from "../components/CardHomePage"

function HomePage() {
  const { fechDataDoctors, doctorsData } = useGlobalContext()
  useEffect(fechDataDoctors, [])


  return (
    <>
      <section className="h-[500px]">
        <CarouselHomePage />
      </section>

      <section className="container m-auto flex justify-center my-[50px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {doctorsData.map(doctor => {
            <CardHomePage data={doctor} />
          })}

        </div>
      </section>
    </>

  )
}

export default HomePage