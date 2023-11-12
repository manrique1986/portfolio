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
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden border-2 flex flex-col justify-center items-center">
              <div>
                <img
                  class="object-center object-cover h-auto w-full"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="photo"
                />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                <p class="text-base text-gray-400 font-normal">
                  Software Engineer
                </p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  class="object-center object-cover h-auto w-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="photo"
                />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                <p class="text-base text-gray-400 font-normal">
                  Graphic Designer
                </p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  class="object-center object-cover h-auto w-full"
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
                  alt="photo"
                />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                <p class="text-base text-gray-400 font-normal">Dev Ops</p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  class="object-center object-cover h-auto w-full"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="photo"
                />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                <p class="text-base text-gray-400 font-normal">
                  Software Engineer
                </p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  class="object-center object-cover h-auto w-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="photo"
                />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                <p class="text-base text-gray-400 font-normal">
                  Graphic Designer
                </p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img
                  class="object-center object-cover h-auto w-full"
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
                  alt="photo"
                />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                <p class="text-base text-gray-400 font-normal">Dev Ops</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default proyectos;
