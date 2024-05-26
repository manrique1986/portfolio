
import React, { useState, useEffect } from 'react';
// import { HiMenuAlt3 } from "react-icons/hi";

import { PiNumberCircleTwoLight,PiNumberCircleThreeLight,PiNumberCircleFourLight,PiNumberCircleFiveLight,PiNumberCircleSixLight} from "react-icons/pi";


import {  AiOutlineClose } from "react-icons/ai";
import { PiNumberCircleOneLight} from "react-icons/pi";

import { Link } from "react-router-dom";


const Dashboard = ({  }) => {

  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    function handleResize() {
      // Si la pantalla es más pequeña que 768px (tamaño típico de dispositivos móviles),
      // se cierra automáticamente el sidebar al inicio y al navegar
      setOpen(window.innerWidth >= 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Manejar el tamaño de la ventana al inicio

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menus = [
    { name: "", link: "/portada", icon: PiNumberCircleOneLight },
    { name: "", link: "/educacion", icon: PiNumberCircleTwoLight },
    { name: "", link: "/sobremi", icon: PiNumberCircleThreeLight},
    { name: "", link: "/skills", icon: PiNumberCircleFourLight},
    { name: "", link: "/proyectos", icon: PiNumberCircleFiveLight },
    { name: "", link: "/contacto", icon: PiNumberCircleSixLight},
   
  ];



 
  return (
    <section className=" flex  ">
       <button
        className="fixed lg:hidden  z-40 opacity-70  z-90 bottom-10 right-8 bg-[#EB3A00] w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#F7B200 ]  duration-300"
        onClick={toggleSidebar}
      >
        <span class="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="w-6 m-auto"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
            />
          </svg>
        </span>
      </button>
      <div
    className={`min-h-screen fixed z-40 bg-scroll ${
      open
        ? "lg:w-[260px] all:w-36 fixed bg-[#2E2E2E] opacity-90"
        : "invisible"
    } duration-500 text-black-100`}
    
      ></div>
      <div
      
        className={` min-h-screen fixed z-40
        bg-scroll  ${
          open ? "lg:w-[260px] all:w-36 fixed bg-[#2E2E2E] opacity-90    " : " invisible"
        } duration-500 text-black-100`}
      >

        <div className="relative flex flex-col    lg:pl-20      xl:mt-12">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              
              className={`  ${
                menu?.margin && "  "
              }  hover:text-[#EC6625] font-medium pt-12 lg:pt-10 all:pl-8 xl:py-6 xl:pt-12 all:pt-14   rounded-md text-[#FFFEFE]`}
            >
              <div
                className={`whitespace-pre duration-500      ${
                  !open && "opacity-0 translate-x-28 overflow-hidden  "
                } ` }
              >
                {React.createElement(menu?.icon, { size: "60" })}
              </div>

              <h2
              
                className={`whitespace-pre duration-300  ${
                  !open && "opacity-0 translate-x-28 overflow-hidden "
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden "
                } absolute left-48 bg-[#FFFEFE] font-semibold whitespace-pre  rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      
      </div>
    </section>
  );
};

export default Dashboard;
