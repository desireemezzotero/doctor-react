import { NavLink } from "react-router-dom"

function HeaderNav() {
  return (
    <nav className="bg-teal-500 fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* immagine logo */}
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">BDoctors</span>
        </NavLink>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-400 rounded-lg text-sm px-4 py-2 bg-teal-50">Get started</button>

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
              <NavLink to="/" className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0" aria-current="page">HomePage</NavLink>
            </li>

            <li>
              <NavLink to="/about" className="block py-2 px-3 text-white rounded-sm md:bg-transparent  md:p-0" aria-current="page">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderNav