import { useState } from 'react';
import StarsRating from './StarsRating'

import { useGlobalContext } from '../context/GlobalContext';

function Reviews({ reviews, average_vote, doctorId, doctorName, doctorSurname }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funzione per aprire il modal
  const openModal = () => setIsModalOpen(true);

  // Funzione per chiudere il modal
  const closeModal = () => setIsModalOpen(false);

  const defaultReviewData = {
    full_name: '',
    title: '',
    description: '',
    vote: 1
  }

  const [reviewData, setReviewData] = useState(defaultReviewData)
  const { addReview } = useGlobalContext()

  const handlerSumbit = (e) => {
    e.preventDefault()

    if (!reviewData.full_name || !reviewData.title || !reviewData.description || !reviewData.vote) {
      alert('tutti i campi sono obbligatori')
      return
    }

    addReview(doctorId, reviewData)
    setReviewData(defaultReviewData)
    window.scrollTo(0, 0)
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setReviewData(prev => ({
      ...prev,
      [name]: value
    }))
  }


  return (
    <>
      <div className="border-l-4 border-teal-500 h-10 flex items-center justify-between mb-4">
        <h3 className="text-2xl pl-2 font-semibold tracking-tight text-gray-900">Recensioni</h3>
        <div className="shrink-0 space-y-4 ml-3 text-center">
          <button type="button" data-modal-target="review-modal" data-modal-toggle="review-modal" className="mb-2 me-2 rounded-lg bg-teal-500 p-2 hover:bg-teal-600 text-white" onClick={openModal}>
            Scrivi una recensione
          </button>
        </div>
      </div>

      <section className="py-8 container m-auto px-3">
        <div className="flex">
          <p className="text-2xl font-semibold text-gray-900 mr-2">{average_vote} su 5</p>

          <div>
            <StarsRating ratingVote={average_vote} />
          </div>
        </div>

        <div className="mt-6">
          {reviews?.map(re => {
            return (
              <div className="pb-6 sm:flex items-center sm:justify-center" key={re.id}>
                <div className="shrink-0 space-y-2 sm:w-48 md:w-72">

                  <div className="flex items-center gap-0.5">
                    <StarsRating ratingVote={re.vote} />
                  </div>

                  <div className="space-y-0.5">
                    <p className="text-base font-semibold text-gray-900">{re.name}</p>
                    <p className="text-sm font-normal text-gray-500">{re.date}</p>
                  </div>

                  <div className="inline-flex items-center gap-1">
                    <svg className="h-5 w-5 text-primary-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm font-medium text-gray-900">Recensione verificata</p>
                  </div>
                </div>

                <div className="mt-4 min-w-0 flex-1  pt-10">
                  <p className="text-base text-black font-bold">{re.title}</p>
                  <p className="text-base font-normal text-gray-500">{re.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>


      {/* Modal */}
      <div id="review-modal" className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-900 bg-opacity-50 ${isModalOpen ? 'block' : 'hidden'}`} >
        <div className="relative w-full max-w-2xl p-4">
          <div className="relative rounded-lg bg-gray-200 shadow">

            {/* Header */}
            <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 md:p-5">
              <div>
                <h3 className="mb-1 text-lg font-semibold">
                  {`Aggiungi recensione per ${doctorName} ${doctorSurname}`}
                </h3>
              </div>

              <button type="button" className="absolute right-5 top-5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-9000" onClick={closeModal}
              >
                <svg className="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Body */}
            <form className="p-4 md:p-5" onSubmit={handlerSumbit}>

              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Nome</label>
                <input className="bg-gray-50 border text-black border-gray-300 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Inserisci il tuo nome"
                  type="text"
                  name="full_name"
                  value={reviewData.full_name}
                  onChange={onChange}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Titolo</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="inserisci un titolo alla recensione"
                  type="text"
                  name="title"
                  value={reviewData.title}
                  onChange={onChange}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Descrizione</label>
                <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="inserisci una descrizione alla recensione"
                  type="text"
                  name="description"
                  value={reviewData.description}
                  onChange={onChange}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Voto</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="inserisci un titolo alla recensione"
                  type="number"
                  name="vote"
                  max="5"
                  min="1"
                  value={reviewData.vote}
                  onChange={onChange}
                />
              </div>

              <div className="border-t border-gray-200 pt-4 md:pt-5">
                <button type="submit" className="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-gray-900  border-gray-200 bg-gray-400" onClick={closeModal} >
                  Aggiungi
                </button>

                <button type="button" onClick={closeModal} className="me-2 rounded-lg border border-gray-200 bg-gray-400 px-5 py-2.5 text-sm font-medium text-gray-900" >
                  Cancella
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews