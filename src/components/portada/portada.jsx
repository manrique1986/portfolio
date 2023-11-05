import React from "react";
import imgPortada from "../../assets/Diseño sin título (3).png";

const portada = () => {
  return (
    <div className="bg-[url('/src/assets/fondoPortada.png')]  lg:w-screen lg:h-screen ">
      <div  >
        <img className="float-right w-50" src="/src/assets/imagenYo.png" alt="" />
        <div className="grid lg:grid-cols-2 all:grid-cols-1 mx-28">
          <div className="mt-36">
            <p className="text-[#EC6625] lg:ml-20 font-bold text-[55px]">
              Leandro Martini
            </p>
            <h1 className=" mt-8 ml-10 npm run text-[45px]">
              Programador frontend
            </h1>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default portada;
