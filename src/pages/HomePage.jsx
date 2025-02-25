import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"

import CarouselHomePage from "../components/CarouselHomePage"
import CardHomePage from "../components/CardHomePage"

function HomePage() {
  const {fechDataDoctors} = useGlobalContext()
  console.log(fechDataDoctors)

  useEffect(fechDataDoctors, [])

  return (
    <>
    <section className="h-[500px]">
      <CarouselHomePage />
    </section>
    <CardHomePage/>
    </>

  )
}

export default HomePage