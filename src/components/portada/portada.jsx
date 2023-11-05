import React from "react";
import imgPortada from "../../assets/Diseño sin título (3).png";
import { Link } from "react-router-dom";

const portada = () => {
  return (
    <div className="bg-[url('/src/assets/fondoPortada.png')]   lg:w-screen lg:h-screen ">
      <div>
        <img
          className="float-right w-50"
          src="https://res.cloudinary.com/dytpump6i/image/upload/v1699213630/imagenYo_usg67s.png"
          alt="imgPortada"
        />
        <div className="grid lg:grid-cols-2 all:grid-cols-1 mx-28">
          <div className=" mt-36">
            <p className="text-[#EC6625] lg:ml-20 font-bold text-[55px]">
              Leandro Martini
            </p>
            <h1 className=" mt-8 ml-10 npm run text-[45px]">
              Programador frontend
            </h1>
          </div>
          <div className="all:">
            <Link to="/sobremi">
              <button className="rounded-full bg-[#EC6625]  lg:float-right lg:mt-64 lg:mr-64">
                Ingresar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default portada;
