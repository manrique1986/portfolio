
import React, { useState } from 'react';
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
        className="fixed  z-40 opacity-70  z-90 bottom-10 right-8 bg-[#EB3A00] w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#F7B200 ]  duration-300"
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
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen  bg-black/50 z-40 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <div
      
        className={` min-h-screen fixed z-40
        bg-scroll  ${
          open ? "lg:w-[260px] all:w-36 fixed bg-[#2E2E2E] opacity-90    " : " invisible"
        } duration-500 text-black-100`}
      >

        <div className="relative flex flex-col  lg:pl-20   mt-12">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              
              className={`  ${
                menu?.margin && "  "
              }  hover:text-[#EC6625] font-medium lg:pt-12 all:pl-8 py-8 t   rounded-md text-[#FFFEFE]`}
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