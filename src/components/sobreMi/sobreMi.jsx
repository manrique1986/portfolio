import React from "react";
import Layout from "../layout";

const sobreMi = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <div className=" bg-img-sobremi bg-cover w-screen h-screen  ">
          <div className="  lg:ml-64 all:mt-2   lg:mt-14 bg-[#F7B200]  ml-10 w-56 lg:h-[60px] lg:w-[275.8px] lg:pt-2  rounded-xl ">
            <h1 className="justify-center items-center all:text-[30px]    font-bold text-center text-[#EB3A00]">
              Sobre mi
            </h1>
          </div>
          <h2 className="flex justify-center text-[#EB3A00] all:text-2xl all:mt-16 lg:text-[40px] ">
            Biografia e introduccion
          </h2>
          <div className="all:p-6 all:pl-14">
            <p className="lg:px-72 ">
              En continuo aprendizaje desde que descubrí el mundo IT. Me
              considero una persona responsable y dinamica, soy una persona
              resolutiva con capacidad de gestión y toma de decisiones, me
              considero con mucha energia y muy buena onda, siempre disponible a
              ayudar y aprender en todo momento.
            </p>
            <p className="lg:px-72  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              aliquam consequatur, fuga ad ipsam perferendis neque itaque quas
              libero magnam atque ex praesentium error labore recusandae
              voluptate molestias cum nesciunt.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default sobreMi;
