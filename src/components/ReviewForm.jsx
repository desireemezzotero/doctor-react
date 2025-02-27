import { useState } from "react";

const formatDate = () => {
  const date = new Date();
  return date.toISOString().split("T")[0]; // Formato YYYY-MM-DD
};

const ReviewForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    vote: 1,
    date: formatDate(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, id: Date.now() }); // Aggiunge un ID univoco
    setFormData({ name: "", title: "", description: "", vote: 1, date: formatDate() });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-screen-lg mx-auto p-8 bg-white shadow-md rounded-lg">
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border rounded-lg text-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="title">
          Titolo
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border rounded-lg text-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="description">
          Descrizione
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border rounded-lg text-lg focus:outline-none focus:ring focus:ring-blue-300"
        ></textarea>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="vote">
          Voto (da 1 a 5)
        </label>
        <select
          id="vote"
          name="vote"
          value={formData.vote}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg text-lg focus:outline-none focus:ring focus:ring-blue-300"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg text-lg hover:bg-blue-600 transition"
      >
        Invia Recensione
      </button>
    </form>
  );
};

export default ReviewForm;