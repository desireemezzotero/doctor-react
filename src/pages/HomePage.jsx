import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"

function HomePage() {
  const {fechDataDoctors} = useGlobalContext()
  console.log(fechDataDoctors)

  useEffect(fechDataDoctors, [])

  return (
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  )
}

export default HomePage