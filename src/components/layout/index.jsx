import { useEffect, useState } from "react";
import Dashboard from "../../components/dashboard/index";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/index";
import { BsTruckFlatbed } from "react-icons/bs";
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/sobremi":
        setTitle("Sobre mi");
        break;
      case "/educacion":
        setTitle("Educacion");
        break;
      case "/SobreMi":
        setTitle("Tus Datos");
        break;
      case "/addmoney":
        setTitle("Ingresar dinero");
        break;
      case "/cards":
        setTitle("Tarjetas");
        break;
      default:
        setTitle("");
        break;
    }
  }, [location.pathname]);

  return (
    <div className="relative w-full h-screen">
      <Dashboard open={open} setOpen={setOpen} />
      <div className="">
        <Navbar menu={() => setOpen(!open)} dato={title} />
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
