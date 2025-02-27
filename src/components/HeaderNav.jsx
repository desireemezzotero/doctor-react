import { NavLink } from "react-router-dom"
import logo from "../assets/img/logo.png"
function HeaderNav() {
  return (
    <nav className="bg-teal-500 fixed w-full top-0 start-0 border-gray-200 z-50">
      <div className="max-w- screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
       
      <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
         <img src={logo} className=" rounded-3xl h-8" alt="Flowbite Logo" />
         <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Bdoctors</span>
      </NavLink>
    

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button className="mr-6">
            <NavLink to='/advance'>
              <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </NavLink>
          </button>
          <button type="button" className="text-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-400 rounded-lg text-sm px-4 py-2 bg-teal-50">Iscriviti</button>

          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2  focus:ring-teal-400 text-teal-50" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-teal-500 md:space-x-8 md:flex-row md:mt-0 md:border-0">
            <li>
              <NavLink to="/" className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0" aria-current="page">Home</NavLink>
            </li>

            <li>
              <NavLink to="/advance" className="block py-2 px-3 text-white rounded-sm md:bg-transparent  md:p-0" aria-current="page">Ricerca Avanzata</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderNav