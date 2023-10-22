import { useEffect, useState } from "react";
import Dashboard from "../../components/dashboard/index";
import { useLocation } from "react-router-dom";
import { BsTruckFlatbed } from "react-icons/bs";
const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState("");

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/portada":
        setTitle("portada");
        break;
      case "/money":
        setTitle("Tu Dinero");
        break;
      case "/profile":
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
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
