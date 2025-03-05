import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function NewDoctorForm() {
   const { speciality, addDoctor, fechDataDoctors } = useGlobalContext();

   // Default doctor data
   const defaultDataDoctor = {
      name: '',
      surname: '',
      telephone: '',
      email: '',
      name_address: '',
      gender: '',
      image: null
   }

   const [selectedSpecialities, setSelectedSpecialities] = useState([]);
   const [doctorData, setDoctorData] = useState(defaultDataDoctor);

   // Handle change for speciality checkboxes
   const specialityHandleChange = (e) => {
      const { value, checked } = e.target;
      if (checked) {
         setSelectedSpecialities([...selectedSpecialities, value])
      } else {
         setSelectedSpecialities(selectedSpecialities.filter(id => id !== value)); // Remove if deselected
      }
   }

   // Handle change for doctor input fields
   const doctorHandleChange = (e) => {
      const { name, value } = e.target;

      if (name === 'image') {
         setDoctorData(prev => ({
            ...prev,
            image: e.target.files[0].name
         }))
      } else {
         setDoctorData(prev => ({
            ...prev,
            [name]: value,
         }))
      }
   }

   // Generate image to send (placeholder or selected image)
   const image = () => {
      let imageToSend = doctorData.image;

      if (!imageToSend) {
         imageToSend = doctorData.gender === "M" ? 'placeholder_male.jpg' : 'placeholder_female.jpg';
      }

      if (typeof imageToSend === "string") {
         const fakeFile = new File([imageToSend], imageToSend.split('/').pop(), {
            type: "image/jpeg", // You can choose the appropriate file type
         });
         imageToSend = fakeFile; // Replace with the fake file
      }

      return {
         ...doctorData,
         image: imageToSend,
         specialities: selectedSpecialities
      }
   }

   // Validate phone number
   const validatePhoneNumber = (phone) => {
      phone = phone.trim()

      const phoneRegex = /^\+?(\d[\d\s]*\d)$/;
      if (!phone.match(phoneRegex)) {
         return 'Il numero di telefono può contenere solo numeri e il "+" può essere presente solo all\'inizio';
      }
      return null;
   };

   // Validate the form before submitting
   const validateForm = (doctorData) => {
      if (
         !doctorData.name ||
         !doctorData.surname ||
         !doctorData.telephone ||
         !doctorData.specialities ||
         !doctorData.name_address ||
         !doctorData.gender ||
         !doctorData.email
      ) {
         alert('Tutti i dati sono obbligatori');
         return false;
      }

      if (doctorData.name.length < 3 || doctorData.surname.length < 3) {
         alert('Il nome e il cognome devono essere superiori a 2 caratteri');
         return false;
      }

      const phoneError = validatePhoneNumber(doctorData.telephone);
      if (phoneError) {
         alert(phoneError);
         return false;
      }

      if (doctorData.name_address.length < 5) {
         alert('L\'indirizzo è troppo breve');
         return false;
      }

      return true;
   };

   // Handle form submission

   const onDoctorSubmit = (e) => {
      e.preventDefault();

      const completeDoctorData = image();

      const dataToSend = new FormData();
      for (let key in completeDoctorData) {
         dataToSend.append(key, completeDoctorData[key]);
      }

      // Validate the form before submitting
      if (!validateForm(completeDoctorData)) {
         return;
      }

      addDoctor(dataToSend);

      // Reset form
      setDoctorData(defaultDataDoctor);
      setSelectedSpecialities([]);
   }

   useEffect(fechDataDoctors, []);

   return (
      <div className=" py-[50px]">
         <div className="border-l-4 border-teal-500 h-10 flex items-center mb-[50px]">
            <h3 className="text-2xl pl-2 font-semibold tracking-tight text-gray-900">Form Di Iscrizione</h3>
         </div>
         <h4 className="text-center text-xl mb-10">Fai crescere la tua carriera. Iscriviti oggi stesso!</h4>
         <form action="#" onSubmit={onDoctorSubmit} className="mx-auto">
            <div className="block mx-5 md:flex md:justify-between">
               <div className="md:w-[45%]">
                  <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Nome</label>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4" placeholder="Inserisci il tuo nome..." name="name" value={doctorData.name} onChange={doctorHandleChange}></input>

                  <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Cognome</label>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4" placeholder="Inserisci il tuo cognome..." name="surname" value={doctorData.surname} onChange={doctorHandleChange}></input>

                  <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Genere</label>
                  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 mb-4" name="gender" onChange={doctorHandleChange}>
                     <option>Genere</option>
                     <option value="M">M</option>
                     <option value="F">F</option>
                  </select>

                  <label htmlFor="d-speciality" className="block mb-2 text-sm font-medium text-gray-900">Specializzazioni</label>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                     {speciality.map((element) => (
                        <div key={element.id} className="flex items-center mb-4">
                           <input
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500  focus:ring-2"
                              id={`s-${element.name}`}
                              value={element.id}
                              checked={selectedSpecialities.includes(String(element.id))}
                              onChange={specialityHandleChange}
                           />
                           <label className="ms-2 text-sm font-medium text-gray-900">{element.name}</label>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="md:w-[45%]">
                  <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Telefono</label>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4" placeholder="Inserisci il tuo numero..." name="telephone" value={doctorData.telephone} onChange={doctorHandleChange}></input>

                  <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                  <input type="mail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4" placeholder="Inserisci la tua mail..." name="email" value={doctorData.email} onChange={doctorHandleChange}></input>


                  <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900">Indirizzo</label>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4" placeholder="Inserisci il tuo indirizzo..." name="name_address" value={doctorData.name_address} onChange={doctorHandleChange}></input>

                  <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="user_avatar">Aggiungi una tua immagine</label>
                  <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none p-2.5" type="file" name="image" onChange={doctorHandleChange}></input>
                  <div className="mt-1 text-sm text-gray-500" id="user_avatar_help">*Questo campo non è obbligatorio</div>
               </div>

            </div >
            <div className="text-center mt-[30px]">
               <button type="submit" className="bg-teal-500 text-white py-[12px] px-[45px] rounded-lg hover:text-teal-500 hover:border hover:border-teal-500 hover:bg-transparent">Iscriviti</button>
               <Link to='/' className="ml-5 bg-teal-500 text-white py-[12px] px-[45px] rounded-lg hover:text-teal-500 hover:border hover:border-teal-500 hover:bg-transparent">Torna Alla Home</Link>
            </div>
         </form >
      </div >
   )
}

export default NewDoctorForm;
