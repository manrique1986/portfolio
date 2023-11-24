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
                "¡Hola! Soy Leandro, un apasionado desarrollador fullstack con
                enfoque en el frontend. Actualmente, trabajo en diversos
                proyectos en plataformas variadas para perfeccionar mis
                habilidades en tecnologías como React y Vue en el frontend, y
                Node.js en el backend. Utilizo herramientas como Bootstrap y
                Tailwind para estilos impactantes.
              </p>
              <p className="lg:px-72 text-[18px]">
                {" "}
                Desde mi descubrimiento en el mundo IT, mantengo un constante
                proceso de aprendizaje. Me defino como una persona responsable y
                dinámica, resolutiva en la gestión y toma de decisiones. Mi
                entusiasmo y energía positiva me caracterizan, siempre dispuesto
                a ayudar y aprender en todo momento. Busco nuevas oportunidades
                para aplicar mi experiencia y contribuir al desarrollo de
                proyectos innovadores. ¡Conversemos sobre cómo puedo aportar a
                tu equipo o proyecto!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default sobreMi;
