import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";

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

      // Submit data
      addDoctor(dataToSend);

      // Reset form
      setDoctorData(defaultDataDoctor);
      setSelectedSpecialities([]);
   }

   useEffect(fechDataDoctors, []);

   return (
      <div className="debug">
         <form action="#" onSubmit={onDoctorSubmit}>
            <label htmlFor="d-name">Nome</label>
            <input
               type="text"
               placeholder="Inserisci il tuo nome..."
               name="name"
               value={doctorData.name}
               onChange={doctorHandleChange}
            />
            <label htmlFor="d-surname">Cognome</label>
            <input
               type="text"
               placeholder="Inserisci il tuo cognome..."
               name="surname"
               value={doctorData.surname}
               onChange={doctorHandleChange}
            />
            <label htmlFor="d-phone">Telefono</label>
            <input
               type="text"
               placeholder="Inserisci il tuo numero..."
               name="telephone"
               value={doctorData.telephone}
               onChange={doctorHandleChange}
            />
            <label htmlFor="d-mail">Email</label>
            <input
               type="email"
               placeholder="Inserisci la tua mail..."
               name="email"
               value={doctorData.email}
               onChange={doctorHandleChange}
            />
            <label htmlFor="d-address">Indirizzo</label>
            <input
               type="text"
               placeholder="Inserisci il tuo indirizzo..."
               name="name_address"
               value={doctorData.name_address}
               onChange={doctorHandleChange}
            />
            <label htmlFor="d-gender">Genere</label>
            <select
               name="gender"
               onChange={doctorHandleChange}
               value={doctorData.gender}
            >
               <option value="">Genere</option>
               <option value="M">M</option>
               <option value="F">F</option>
            </select>
            <label htmlFor="d-image">Inserisci un'immagine</label>
            <input
               type="file"
               name="image"
               onChange={doctorHandleChange}
            />

            <div>
               <label htmlFor="d-speciality">Specializzazioni</label>
               {speciality.map((element) => (
                  <div key={element.id}>
                     <input
                        type="checkbox"
                        id={`s-${element.name}`}
                        value={element.id}
                        checked={selectedSpecialities.includes(String(element.id))}
                        onChange={specialityHandleChange}
                     />
                     <label>{element.name}</label>
                  </div>
               ))}
            </div>

            <button type="submit" className="bg-red-700 text-white p-3">
               Iscriviti
            </button>
         </form>
      </div>
   )
}

export default NewDoctorForm;
