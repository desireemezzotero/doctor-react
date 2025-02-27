import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
//Default Layout
import DefaultLayout from "./layout/DefaultLayout";

//Pages
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AdvancePage from "./pages/AdvancePage";
import NewDoctorPage from "./pages/NewDoctorPage";
import SpecialitiesPage from "./pages/SpecialitiesPage";

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path='/' Component={HomePage} />
              <Route path='/doctor/:id' Component={DetailPage} />
              <Route path='/advance' Component={AdvancePage} />
              <Route path='/new-doctor' Component={NewDoctorPage} />
              <Route path='/speciality/:id' Component={SpecialitiesPage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App