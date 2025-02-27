import { useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"


function NewReviewForm({doctorId}) {

 const defaultReviewData = {
   full_name: '',
   title: '',
   description: '',
   vote: 1
  }

  const [reviewData, setReviewData] = useState(defaultReviewData)
  const {addReview} = useGlobalContext()

  const handlerSumbit = (e) => {
   e.preventDefault()
   addReview(doctorId, reviewData)
   setReviewData(defaultReviewData)
   window.scrollTo(0, 0)
  }

  const onChange = (e) => {
    const {name,value} = e.target
    setReviewData(prev => ({
      ...prev,
      [name]: value
    }))
  }


  return (
    <div>
      <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3 text-center mt-5">Aggiungi la tua recensione</h3>
       <div className="items-center mt-4 mx-auto xl:mx-[170px] md:mx-[50px]">
          <div className="p-4 border flex w-full border-gray-200 rounded-lg shadow-sm bg-gray-100 ">
            <form className="max-w-sm mx-auto w-full" onSubmit={handlerSumbit}>

              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Nome</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                  placeholder="Inserisci il tuo nome" 
                  type="text"
                  name= "full_name"
                  value= {reviewData.full_name}
                  onChange={onChange}
                  required 
                  />
              </div>

              <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Titolo</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                  placeholder="inserisci un titolo alla recensione" 
                  type="text"
                  name= "title"
                  value= {reviewData.title}
                  onChange={onChange}
                  required />
             </div>

             <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">descrizione</label>
                <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                  placeholder="inserisci un titolo alla recensione" 
                  type="text"
                  name= "description"
                  value= {reviewData.description}
                  onChange={onChange}
                  required />
             </div>

             <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Voto</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                  placeholder="inserisci un titolo alla recensione" 
                  type="number"
                  name= "vote"
                  max="5"
                  min="1"
                  value= {reviewData.vote}
                  onChange={onChange}
                  required />
             </div>

              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
           </form>
          </div>
        </div>
    </div>
  )
}

export default NewReviewForm