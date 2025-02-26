import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import AdvancePage from "./pages/AdvancePage"

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path='/' Component={HomePage} />
              <Route path='/about' Component={AboutPage} />
              <Route path='/doctor/:id' Component={DetailPage} />
              <Route path='/advance' Component={AdvancePage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App