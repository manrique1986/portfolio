import React from "react";
import Layout from "../layout";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
const proyectos = () => {
  return (
    <Layout>
      <div className="flex">
        <div className="bg-img-proyectos bg-cover w-screen h-full  bg-top">
          <div className=" flex justify-center  lg:ml-64 all:mt-2    lg:mt-14 bg-[#F7B200]   lg:h-[60px] lg:w-[275.8px] lg:pt-2  rounded-xl all:mx-11 ">
            <h1 className="justify-center items-center all:text-[30px]    font-bold text-center text-[#EB3A00]">
              Proyectos
            </h1>
          </div>

          <section className="flex justify-center max-w-6xl  mx-auto px-4 sm:px-6 lg:px-4 py-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                className="w-full bg-white rounded-lg sahdow-lg overflow-hidden border-2 shadow-md shadow-[#EB3A00]
             flex flex-col justify-center items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "
              >
                <div>
                  <img
                    class="object-center object-cover h-auto w-full"
                    src="https://res.cloudinary.com/dytpump6i/image/upload/v1699811576/lifebook_zlcypn.png"
                    alt="photo"
                  />
                </div>
                <div class="text-center py-8 sm:py-6">
                  <p class="text-xl text-gray-700 font-bold mb-2 ">LifeBook</p>
                  <p class="text-base text-gray-400 font-normal">
                    Libro diario digital
                  </p>
                  <Link
                    to={
                      "https://github.com/No-Country/S5-03-Java-React/tree/dev-frontend"
                    }
                  >
                    <AiOutlineGithub className="text-black h-8 w-8 m-auto " />
                  </Link>
                </div>
              </div>
              <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center border-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 shadow-md shadow-[#EB3A00]">
                <div>
                  <img
                    class="object-center object-cover h-auto w-full"
                    src="https://res.cloudinary.com/dytpump6i/image/upload/v1699811618/proyecto_jardin_arfvii.png"
                    alt="photo"
                  />
                </div>
                <div class="text-center py-8 sm:py-6">
                  <p class="text-xl text-gray-700 font-bold mb-2">
                    Burbujas de algodon
                  </p>
                  <p class="text-base text-gray-400 font-normal">
                    Proyecto jardin
                  </p>
                  <Link to={"https://github.com/manrique1986/proyecto-jardin"}>
                    <AiOutlineGithub className="text-black h-8 w-8 m-auto" />
                  </Link>
                </div>
              </div>
              <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center border-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 shadow-md shadow-[#EB3A00]">
                <div>
                  <img
                    class="object-center object-cover h-auto w-full"
                    src="https://res.cloudinary.com/dytpump6i/image/upload/v1699916090/Captura_de_pantalla_2023-11-13_195406_zefhew.png"
                    alt="photo"
                  />
                </div>
                <div class="text-center py-8 sm:py-6">
                  <p class="text-xl text-gray-700 font-bold mb-2">Walletpay</p>
                  <p class="text-base text-gray-400 font-normal">
                    Billetera virtual
                  </p>
                  <Link to={"https://github.com/manrique1986/WalletPay"}>
                    <AiOutlineGithub className="text-black h-8 w-8 m-auto  " />
                  </Link>
                </div>
              </div>
              <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center border-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 shadow-md shadow-[#EB3A00]">
                <div>
                  <img
                    class="object-center object-cover h-auto w-full"
                    src="https://res.cloudinary.com/dytpump6i/image/upload/v1699811858/productos_1_nfgv04.png"
                    alt="photo"
                  />
                </div>
                <div class="text-center py-8 sm:py-6">
                  <p class="text-xl text-gray-700 font-bold mb-2">
                    Mundo mascota
                  </p>
                  <p class="text-base text-gray-400 font-normal">
                    Ecommerce para mascotas
                  </p>
                  <Link to={"https://github.com/manrique1986/Mundo-mascota"}>
                    <AiOutlineGithub className="text-black h-8 w-8 m-auto" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default proyectos;
