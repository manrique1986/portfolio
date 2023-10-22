import React from "react";
// import { HiMenuAlt3 } from "react-icons/hi";

import { PiNumberCircleTwoLight,PiNumberCircleThreeLight,PiNumberCircleFourLight,PiNumberCircleFiveLight,PiNumberCircleSixLight} from "react-icons/pi";



import { PiNumberCircleOneLight} from "react-icons/pi";

import { Link } from "react-router-dom";


const Dashboard = ({ open, setOpen }) => {
  const menus = [
    { name: "", link: "/portada", icon: PiNumberCircleOneLight },
    { name: "", link: "/educacion", icon: PiNumberCircleTwoLight },
    { name: "", link: "/", icon: PiNumberCircleThreeLight},
    { name: "", link: "/money", icon: PiNumberCircleFourLight},
    { name: "", link: "/", icon: PiNumberCircleFiveLight },
    { name: "", link: "/", icon: PiNumberCircleSixLight},
   
  ];
 
  return (
    <section className="relative flex border- ">
      <div
        onClick={() => setOpen(true)}
        className={`md:hidden fixed inset-0 max-h-screen   ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <div
        className={`absolute min-h-screen    ${
          open ? "lg:w-[260px] bg-[#2E2E2E]    " : " invisible"
        } duration-500 text-black-100`}
      >

        <div className="relative flex flex-col gap-1 lg:pl-20  mt-14">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`  ${
                menu?.margin && "  "
              }  hover:text-[#EC6625] font-medium pl-4 py-4  rounded-md text-[#FFFEFE]`}
            >
              <div
                className={`whitespace-pre duration-500     ${
                  !open && "opacity-0 translate-x-28 overflow-hidden "
                }`}
              >
                {React.createElement(menu?.icon, { size: "40" })}
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
                  open && "hidden"
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