import React from "react";
import imgPortada from "../../assets/Diseño sin título (3).png";

const portada = () => {
  return (
    <div className="bg-img-fondo bg-cover w-screen h-screen ">
      <div  >
        <div className="grid grid-cols-2 mx-28">
          <div className="mt-36">
            <p className="text-[#EC6625] font-bold text-[74px]">
              Leandro Martini
            </p>
            <h1 className=" mt-8 ml-10 npm run detext-[65px]">
              Programador frontend
            </h1>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default portada;
