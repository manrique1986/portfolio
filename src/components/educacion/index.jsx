import React from "react";
import Layout from "../layout";
// import 'animate.css';

const index = () => {
  return (
    <div>
      <Layout>
        <div className="flex flex-col">
          <div className=" bg-img-educacion bg-cover w-screen h-screen bg-top ">
            <div className="   lg:ml-64 all:mt-2    lg:mt-14 bg-[#F7B200]  ml-10 w-56 lg:h-[60px] lg:w-[275.8px] lg:pt-2  rounded-xl ">
              <h1 className="justify-center items-center all:text-[30px]   font-bold text-center text-[#EB3A00]">
                Educacion
              </h1>
            </div>
            <section className=" all:ml-14 lg:ml-96  ">
              <div>
                <h1 className=" text-[#EB3A00] all:text-2xl all:mt-8 lg:mt-16  lg:text-[35px]">
                  Coderhouse Junio de 2021 - Marzo de 2022
                </h1>
                <h3 className="font-bold pt-4  ">Realice la carrera de desarrolador frontend, dentro de ella incluye los cursos de desarrollo web, Javascript y React.
               
                </h3>
                <h3 className="font-bold ">     En el mes de Marzo del 2022 realice el curso de Vue</h3>
                {/* <ul className="lg:pt-6 ">
                  <li>Carrera Desarrollo Frontend React <span className="text-orange-700">Junio de 2021 a Noviembre 2021</span></li>
                  <li className="ml-4">Desarrollo web</li>
                  <li className="ml-4">Javascript</li>
                  <li className="ml-4">React</li>
                  <li>Vue <span className="text-orange-700">Marzo de 2022</span></li>
                </ul> */}
              </div>
              <div className="">
                <h1 className=" text-[#EB3A00] all:text-2xl all:mt-8 lg:mt-16  lg:text-[35px]">
                 Educacion it Febreso 2023 - Mayo 2023
                </h1>
                <h3 className="font-bold pt-4 "> Realice el curso de React, luego inicie con Node Js</h3>
                {/* <ul className="lg:pt-6">
                  <li>React <span className="text-orange-700">Febrero de 2023</span></li>
                
                  <li>Node js <span className="text-orange-700">Mayo 2023</span></li>
                </ul> */}
              </div>
              <div className="">
                <h1 className=" text-[#EB3A00] all:text-2xl all:mt-8 lg:mt-16 lg:text-[35px]">
                Udemy agosto 2023 - actualmente
                </h1>
               <h3 className="font-bold pt-4">
                Me encuentro realizando curso de Node JS y realizando estudios de buenas practicas en Javascript
               </h3>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default index;
