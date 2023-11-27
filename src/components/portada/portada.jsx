import React, { useEffect, useState } from "react";
import imgPortada from "../../assets/Diseño sin título (3).png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "../loading/loading";
import { useNavigate } from "react-router-dom";

import {
  AiOutlineArrowDown,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

AOS.init();

const portada = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/sobremi");
    }, 2000);
  };

  return (
    <>
      {loading ? (
        <Loading  />
      ) : (
        <div className="flex flex-col bg-[url('https://res.cloudinary.com/dytpump6i/image/upload/v1697654019/fondoPortada_dfpeku.png')]  bg-top h-screen  w-screen ">
          <div className="">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="float-right  "
            >
              <img className=" "
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1699213630/imagenYo_usg67s.png"
                alt="imgPortada"
              />
            </div>
            <div className=" ">
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className=" lg:mt-24 m-auto "
              >
                <p className="text-[#EC6625] all:text-center   font-bold text-[50px] lg:text-[80px]">
                  Leandro Martini
                </p>
                <h1 className="all:text-center lg:mt-8 lg:ml-10 all:text-[30px] text-[55px]">
                  Programador Full-Stack
                </h1>
              </div>
              {/* animate-bounce transition  */}

              <div className=" all:text-center mt-8  ">
                <div className="flex justify-center ">
                  <AiOutlineArrowDown className=" opacity-70 animate-bounce w-6 h-6   " />
                </div>

                <button
                  onClick={handleClick}
                  className=" rounded-full bg-[#F7B200] text-[#EC6625]  font-bold    "
                >
                  Ingresar
                </button>
              </div>

              <div className="all:text-center all:mt-24 text-xl text-white mb-2  ">
                <Link to={"https://www.facebook.com/leandro.martini.5?mibextid=ZbWKwL" } target="_blank">
                <li className="text-white cursor-pointer w-10 h-10 rounded-full bg-[#EC6625] hover:bg-yellow-600  mx-1 inline-block pt-2 p-2 ">
                  <FaFacebook />{" "}
                </li>
                </Link>
                <Link to={"https://instagram.com/leandromartini86?utm_source=qr&igshid=OWM2ZWI5NDFkNA=="} target="_blank">
                <li className="text-white cursor-pointer w-10 h-10 rounded-full bg-[#EC6625] hover:bg-yellow-600 mx-1 inline-block pt-2 p-2 ">
                  {" "}
                  <FaInstagram />
                </li>
                </Link>
                <Link to={"https://www.linkedin.com/in/leandro-martini-developer/"} target="_blank">
                <li className="text-white cursor-pointer w-10 h-10 rounded-full bg-[#EC6625] hover:bg-yellow-600 mx-1 inline-block pt-2 p-2 ">
                  <AiOutlineLinkedin />
                </li>
                </Link>
                <Link to={"https://github.com/manrique1986"} target="_blank">
                <li className=" text-white cursor-pointer w-10 h-10 rounded-full bg-[#EC6625] hover:bg-yellow-600 mx-1 inline-block pt-2 p-2 ">
                  <AiOutlineGithub />
                </li>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default portada;
