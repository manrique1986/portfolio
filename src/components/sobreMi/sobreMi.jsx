import React from "react";
import Layout from "../layout";

const sobreMi = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <div className=" bg-img-sobremi bg-cover w-screen h-screen  bg-top ">
          <div className="  flex justify-center  lg:ml-64 all:mt-2    lg:mt-14 bg-[#F7B200]   lg:h-[60px] lg:w-[275.8px] lg:pt-2  rounded-xl all:mx-11">
            <h1 className="justify-center items-center all:text-[30px]    font-bold text-center text-[#EB3A00]">
              Sobre mi
            </h1>
          </div>
          <div className="mt-28">
            <h2 className="flex justify-center text-[#EB3A00] all:text-2xl all:mt-16 lg:text-[40px] ">
              Biografia e introduccion
            </h2>
            <div className="all:p-6 all:pl-14">
              <p className="lg:px-72 text-[18px]">
                Hola! Soy Leandro, desarrolador fullstack con orientacion al
                frontend. Actualmente me encuentro realizanzo proyectos en
                distintas plataforma que me ayuden a mejorar mis practicas con
                tecnologias como del lado del Front con React y Vue, para los
                estilos utilizo Boostrap o Taiwilnd y por el lado del Backend,
                Node Js. estoy En continuo aprendizaje desde que descubrí el
                mundo IT. Me considero una persona responsable y dinamica, soy
                una persona resolutiva con capacidad de gestión y toma de
                decisiones, me considero con mucha energia y muy buena onda,
                siempre disponible a ayudar y aprender en todo momento.
              </p>
              <p className="lg:px-72 text-[18px]  ">
                A la espera de oportunidades y poder colaborar con mis habilidades
                para el desarrollo de software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default sobreMi;
