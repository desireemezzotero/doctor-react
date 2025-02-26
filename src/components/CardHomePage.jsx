import { NavLink } from "react-router-dom";
import StarsRating from "./StarsRating";

function CardHomePage({ data }) {
    const { id, name, surname, image_url, average_vote, name_speciality } = data;

    return (
        <div className="w-full h-[500px] bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="h-[70%]">
                <img className="rounded hp-doctor-img" src={image_url} alt={`Doctor ${surname} ${name} image`} />
            </div>
            <div className="h-[30%] flex flex-col items-between justify-center">
                <div className="p-4">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{`${name} ${surname}`}</h5>
                    <span className="text-gray-900">{name_speciality}</span>
                    <div className="mt-4 flex justify-between items-center">
                        <StarsRating ratingVote={average_vote} />
                        <div className="flex items-center justify-between">
                            <NavLink to={`/doctor/${id}`} className="text-teal-50 bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Vedi</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default CardHomePage