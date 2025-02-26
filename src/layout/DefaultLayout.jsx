import { Outlet } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";

function DefaultLayout() {
  return (
    <>
      <header>
        <HeaderNav />
      </header>
      <main className="mt-[68px]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default DefaultLayout