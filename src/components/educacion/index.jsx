import React from "react";


const index = () => {
  return (
    <div>
   
        <div className="flex flex-col">
          <div className=" bg-img-educacion bg-cover w-screen h-screen  ">
            <div className="  lg:ml-64 all:mt-2    lg:mt-14 bg-[#F7B200]  ml-10 w-56 lg:h-[60px] lg:w-[275.8px] lg:pt-2  rounded-xl ">
              <h1 className="justify-center items-center all:text-[30px]   font-bold text-center text-[#EB3A00]">
                Educacion
              </h1>
            </div>
            <section className=" lg:flex all:ml-14 lg:ml-72   ">
              <div>
                <h1 className=" text-[#EB3A00] all:text-2xl all:mt-8 lg:mt-16  lg:text-[35px]">
                  Coderhouse
                </h1>
                <ul className="lg:pt-6 ">
                  <li>Carrera de Frontend <span className="text-orange-700">Junio de 2021 a Noviembre 2021</span></li>
                  <li className="ml-4">Desarrollo web</li>
                  <li className="ml-4">Javascript</li>
                  <li className="ml-4">React</li>
                  <li>Vue <span className="text-orange-700">Marzo de 2022</span></li>
                </ul>
              </div>
              <div className="lg:px-20">
                <h1 className=" text-[#EB3A00] all:text-2xl all:mt-8 lg:mt-16  lg:text-[35px]">
                 Educacion it
                </h1>
                <ul className="lg:pt-6">
                  <li>React <span className="text-orange-700">Febrero de 2023</span></li>
                
                  <li>Node js <span className="text-orange-700">Mayo 2023</span></li>
                </ul>
              </div>
              <div className="lg:px-20">
                <h1 className=" text-[#EB3A00] all:text-2xl all:mt-8 lg:mt-16 lg:text-[35px]">
                 Educacion it
                </h1>
                <ul className="lg:pt-6">
                  <li>React <span className="text-orange-700">Febrero de 2023</span></li>
                
                  <li>Node js <span className="text-orange-700">Mayo 2023</span></li>
                </ul>
              </div>
            </section>
          </div>
        </div>
  
    </div>
  );
};

export default index;
