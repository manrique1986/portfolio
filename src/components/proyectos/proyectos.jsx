import React from "react";
import Layout from "../layout";

const proyectos = () => {
  return (
    <Layout>
      <div>
        <div className="  lg:ml-64 all:mt-2   lg:mt-14 bg-[#F7B200]  ml-10 w-56 lg:h-[60px] lg:w-[275.8px] lg:pt-2  rounded-xl ">
          <h1 className="justify-center items-center all:text-[30px]    font-bold text-center text-[#EB3A00]">
            Proyectos
          </h1>
        </div>

        <section className="lg:ml-80 max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
       
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden border-2
             flex flex-col justify-center items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ">
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
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center border-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
              <div>
                <img
                  class="object-center object-cover h-auto w-full"
                  src="https://res.cloudinary.com/dytpump6i/image/upload/v1699811618/proyecto_jardin_arfvii.png"
                  alt="photo"
                />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Burbujas de algodon</p>
                <p class="text-base text-gray-400 font-normal">
                  Proyecto jardin 
                </p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center border-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
              <div>
                <img
                  class="object-center object-cover h-auto w-full"
                  src="https://res.cloudinary.com/dytpump6i/image/upload/v1699811732/walletpay_flbxyn.png"
                  alt="photo"
                />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Walletpay</p>
                <p class="text-base text-gray-400 font-normal">Villetera virtual</p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center border-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
              <div>
                <img
                  class="object-center object-cover h-auto w-full"
                  src="https://res.cloudinary.com/dytpump6i/image/upload/v1699811858/productos_1_nfgv04.png"
                  alt="photo"
                />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Mundo mascota</p>
                <p class="text-base text-gray-400 font-normal">
                  Ecommerce para mascotas
                </p>
              </div>
            </div>
        
           
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default proyectos;
