import React from "react";
import Layout from "../layout";

const index = () => {
  return (
    <div>
      <Layout>
        <div className="flex flex-col">
          <div className=" bg-img-educacion bg-cover  w-screen h-screen  ">
            <div className="  lg:ml-64 all:mt-2    lg:mt-14 bg-[#F7B200]  ml-10 w-56 lg:h-[60px] lg:w-[275.8px] lg:pt-2  rounded-xl ">
              <h1 className="justify-center items-center all:text-[30px]   font-bold text-center text-[#EB3A00]">
                Educacion
              </h1>
            </div>
            <div className="lg:ml-96 all:mt-28 lg:mt-4 justify-center all:px-11">
              {/* Coderhouse */}
              <div className="mb-6">
                <h3 className="text-[#EB3A00] all:text-2xl all:mt-8 lg:text-xl xl:text-4xl font-semibold lg:text-[35px]">
                  Coderhouse (Junio 2021 - Marzo 2022)
                </h3>
                <p className="font-extrabold mt-4">
                  Carrera de Desarrollador Frontend:
                </p>
                <ul className="list-inside list-disc pl-6 mb-2 font-bold pt-4">
                  <li>Desarrollo Web</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Curso adicional (Marzo 2022): Vue.js</li>
                </ul>
              </div>

              {/* Educacion IT */}
              <div className="mb-6">
                <h3 className="text-[#EB3A00] all:text-2xl all:mt-8 lg:text-xl xl:text-4xl  font-semibold lg:text-[35px]">
                  Educacion IT (Febrero 2023 - Mayo 2023)
                </h3>
                <ul className="list-inside list-disc pl-6 mb-2 font-bold pt-4">
                  <li>Curso de React</li>
                  <li>Node.js</li>
                </ul>
              </div>

              {/* Udemy */}
              <div>
                <h3 className="text-[#EB3A00] all:text-2xl all:mt-8 lg:text-xl xl:text-4xl  font-semibold lg:text-[35px]">
                  Udemy (Agosto 2023 - Actualidad)
                </h3>
                <ul className="list-inside list-disc pl-6 mb-2 font-bold pt-4">
                  <li>Curso actual (Actualidad): Node.js</li>
                  <li>
                    {" "}
                    Estudios en curso (Actualidad): Buenas Prácticas en
                    Javascript
                  </li>
                </ul>
              </div>
            </div>
            {/* <section className=" lg:ml-96 all:mt-28 justify-center all:px-11 ">
              <div>
                <h1 className=" text-[#EB3A00] all:text-2xl all:mt-8 lg:mt-16  lg:text-[35px]">
                  Coderhouse Junio de 2021 - Marzo de 2022
                </h1>
                <h3 className="font-bold pt-4  ">Realice la carrera de desarrolador frontend, dentro de ella incluye los cursos de desarrollo web, Javascript y React.
               
                </h3>
                <h3 className="font-bold ">     En el mes de Marzo del 2022 realice el curso de Vue</h3>
             
              </div>
              <div className="">
                <h1 className=" text-[#EB3A00] all:text-2xl all:mt-8 lg:mt-16  lg:text-[35px]">
                 Educacion it Febrero 2023 - Mayo 2023
                </h1>
                <h3 className="font-bold pt-4 "> Realice el curso de React y posteriormente comencé a explorar Node.js.</h3>
              
              </div>
              <div className="">
                <h1 className=" text-[#EB3A00] all:text-2xl all:mt-8 lg:mt-16 lg:text-[35px]">
                Udemy agosto 2023 - actualmente
                </h1>
               <h3 className="font-bold pt-4">
                Me encuentro realizando curso de Node JS y realizando estudios de buenas practicas en Javascript
               </h3>
              </div>
            </section> */}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default index;
