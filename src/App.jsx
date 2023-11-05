import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portada from "./components/portada/portada";
import SobreMi from "./components/sobreMi/sobreMi";
import Educacion from "./components/educacion/index";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SobreMi />} />
          
          <Route path="/portada" element={<Portada />} />
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path="/educacion" element={<Educacion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
