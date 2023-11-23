import React from "react";
import Layout from "../layout";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, como usar un servicio de envío de correos.
    // Por ahora, simplemente mostraremos un mensaje de éxito.
    alert("¡Correo enviado con éxito!");
  };

  return (
    <Layout>
      <div className="bg-img-proyectos bg-cover w-screen h-screen  bg-top">
        <div className="min-h-screen flex items-center justify-center ">
         
          <div className="lg:w-5/12 all:w-4/5  lg:p-8 all:p-2 rounded-md shadow-md">
          <h3 className="text-[#EB3A00] all:text-2xl all:mt-8 lg:mt-16 font-semibold lg:text-[35px] mb-6">Leandro Martini</h3>
           

            <div className="flex items-center mb-6">
              <FaEnvelope className="text-2xl mr-4" />
              <p>leandromartini86@gmail.com</p>
            </div>

            <div className="flex items-center mb-6">
              <FaPhone className="text-2xl mr-4" />
              <p>(11) 3037-4277</p>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Nombre:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Mensaje:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#EB3A00] text-white px-4 py-2 rounded-md hover:bg-[#F7B200]"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
