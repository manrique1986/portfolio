import React, { useRef } from "react";
import Layout from "../layout";
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tg9orsi",
        "template_09y1r5d",
        form.current,
        "qhEGotbMgonBcwPrk"
      )
      .then(
        (result) => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            navigate("/contacto");
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Layout>
      {loading ? (
        <div className="w-screen h-screen  flex items-center justify-center bg-img-contacto">
          <p className="  text-[#EB3A00] all:text-2xl all:mt-8 lg:mt-16 font-semibold lg:text-[35px] mb-6">
            Correo enviado con exito...
          </p>
        </div>
      ) : (
        <div className="bg-img-proyectos bg-cover w-screen h-screen  bg-top">
          <div>
            <FaWhatsapp />
          </div>
          <div className="min-h-screen flex items-center justify-center ">
            <div className="lg:w-5/12 all:w-4/5  lg:p-8 all:p-2 rounded-md shadow-md">
              <Link to={"https://api.whatsapp.com/send?phone=+5441130374277" }target="_blank">
                <div className="float-right  ">
                  <FaWhatsapp className="w-[45px] h-[45px] p-2 hover:cursor-pointer hover:text-[#0df053] hover:bg-white bg-[#0df053] text-white rounded-[50px]" />
                </div>
              </Link>
              <h3 className="text-[#EB3A00] all:text-2xl all:mt-8 lg:mt-16 font-semibold lg:text-[35px] mb-6">
                Leandro Martini
              </h3>

              <div className="flex items-center mb-6">
                <FaEnvelope className="text-2xl mr-4" />
                <p>leandromartini86@gmail.com</p>
              </div>

              <div className="flex items-center mb-6">
                <FaPhone className="text-2xl mr-4" />
                <p>(11) 3037-4277</p>
              </div>

              <form ref={form} onSubmit={sendEmail}>
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
                    name="user_name"
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
                    name="user_email"
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
      )}
    </Layout>
  );
};

export default Contact;
