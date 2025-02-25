import { Outlet } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";

function DefaultLayout() {
  return (
    <>
    <header>
     <HeaderNav/>
    </header>
    <main className="mt-[68px]">
      <Outlet />
    </main>
    <footer>

    </footer>
    </>
  )
}

export default DefaultLayout