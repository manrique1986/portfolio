import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Portada  from "./components/portada/portada";
import SobreMi from "./components/sobreMi/sobreMi";
import Educacion from "./components/educacion/index"
import Skills from "./components/skills/skills";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Portada />} />
          <Route  path="/portada" element={<Portada />} />
          <Route  path="/sobremi" element={<SobreMi />} />
          <Route  path="/educacion" element={<Educacion />} />
          <Route path="/skills" element={<Skills/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
