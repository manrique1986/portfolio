import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Portada  from "./components/portada/portada";
import SobreMi from "./components/sobreMi/sobreMi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/portada" element={<Portada />} />
          <Route  path="/sobremi" element={<SobreMi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
