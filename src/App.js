import React, { useState } from "react";

// Components
import NotFound from "./components/advanced/notFound/NotFound";

// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Data
import { routeComponents, paths, sidebarRoutes } from "./data/routes";

// Contexts
import { RoutesContext } from "./contexts/RoutesContext";
import GeneralInfoContext from "./contexts/GeneralInfoContext";
import { PricesProvider } from "./contexts/PricesContext";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  return (
    <PricesProvider>
      <BrowserRouter>
        <RoutesContext.Provider value={{ paths, sidebarRoutes }}>
          <GeneralInfoContext.Provider value={[generalInfo, setGeneralInfo]}>
            <Routes>
              {routeComponents}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </GeneralInfoContext.Provider>
        </RoutesContext.Provider>
      </BrowserRouter>
    </PricesProvider>
  );
}

export default App;
