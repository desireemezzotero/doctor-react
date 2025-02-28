import { Outlet } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";

function DefaultLayout() {
  return (
    <>
      <header>
        <HeaderNav />
      </header>
      <main className="mt-[64px] min-h-[calc(100vh-178px)]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default DefaultLayout