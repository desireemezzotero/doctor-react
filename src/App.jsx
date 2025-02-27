import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AdvancePage from "./pages/AdvancePage";
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
              <Route path='/speciality/:id' Component={SpecialitiesPage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App