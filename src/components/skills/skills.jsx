import React from "react";
import Layout from "../layout";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const skills = () => {
  // bg-cover bg w-screen h-screen all:bg-cover bg-top
  return (
    <Layout>
      <div className="flex ">
        <div className="bg-img-skills bg-scroll   bg-cover all:h-full lg:h-screen w-screen bg-top">
          <div className="  lg:ml-64 all:mt-2   lg:mt-14 bg-[#F7B200]  ml-10 w-56 lg:h-[60px] lg:w-[275.8px] lg:pt-2  rounded-xl ">
            
            <h1 className="justify-center items-center all:text-[30px]    font-bold text-center text-[#EB3A00]">
              Skills
            </h1>
          </div>
          <div class="container flex flex-col mx-auto w-auto">
            <div class="w-full draggable">
              <div class="container flex flex-col items-center gap-16 mt-14">
                <div class="grid w-7/12 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                  <div data-aos="fade-right" class="flex flex-col items-center gap-3 px-4 py-10 border-2 border-orange-600  rounded-3xl shadow-main">
                    <span>
                      <img
                        className=" all:h-8 all:w-8 lg:h-20 lg:w-20"
                        src="https://res.cloudinary.com/dytpump6i/image/upload/v1699674116/logohtml_o0jgqg.svg"
                        alt="html"
                      />
                    </span>
                    <p class="text-2xl font-extrabold text-dark-grey-900">
                      Html
                    </p>
                  </div>
                  <div data-aos="fade-left" class="flex flex-col items-center gap-3 px-8 py-10 border-2 border-orange-600  rounded-3xl shadow-main">
                    <span>
                      <img
                        className="all:h-8 all:w-8 lg:h-20 lg:w-20 "
                        src="https://res.cloudinary.com/dytpump6i/image/upload/v1699674177/logoCss_vum7yd.svg"
                        alt="html"
                      />
                    </span>
                    <p class="text-2xl font-extrabold text-dark-grey-900">
                      Css
                    </p>
                  </div>
                  <div data-aos="fade-up-right" class="flex flex-col items-center gap-3 px-8 py-10 border-2 border-orange-600   rounded-3xl shadow-main">
                    <span>
                      <img
                        className="all:h-8 all:w-8 lg:h-20 lg:w-20"
                        src="https://res.cloudinary.com/dytpump6i/image/upload/v1699674205/logoJS_vihzto.svg"
                        alt="html"
                      />
                    </span>
                    <p class="text-2xl font-extrabold text-dark-grey-900">
                      Javascript
                    </p>
                  </div>
                  <div data-aos="fade-up-left" class="flex flex-col items-center gap-3 px-8 py-10 border-2 border-orange-600   rounded-3xl shadow-main">
                    <span>
                      <img
                        className="all:h-8 all:w-8 lg:h-20 lg:w-20"
                        src="https://res.cloudinary.com/dytpump6i/image/upload/v1699674238/react_ewim0s.svg"
                        alt="html"
                      />
                    </span>
                    <p class="text-2xl font-extrabold text-dark-grey-900">
                      React
                    </p>
                  </div>
                  <div data-aos="zoom-in" class="flex flex-col items-center gap-3 px-8 py-10 border-2 border-orange-600   rounded-3xl shadow-main">
                    <span>
                      <img
                        className="all:h-8 all:w-8 lg:h-20 lg:w-20"
                        src="https://res.cloudinary.com/dytpump6i/image/upload/v1699675645/vue-9_a1hd4x.svg"
                        alt="html"
                      />
                    </span>
                    <p class="text-2xl font-extrabold text-dark-grey-900">
                      Vue
                    </p>
                  </div>
                  <div class="flex flex-col items-center gap-3 px-8 py-10 border-2 border-orange-600   rounded-3xl shadow-main">
                    <span>
                      <img
                        className="all:h-8 all:w-8 lg:h-20 lg:w-20"
                        src="https://res.cloudinary.com/dytpump6i/image/upload/v1699674680/nodejs-logo-svgrepo-com_axruvh.svg"
                        alt="html"
                      />
                    </span>
                    <p class="text-2xl font-extrabold text-dark-grey-900">
                      Node Js
                    </p>
                  </div>
                  <div class="flex flex-col items-center gap-3 px-8 py-10 border-2 border-orange-600   rounded-3xl shadow-main">
                    <span>
                      <img
                        className="all:h-8 all:w-8 lg:h-20 lg:w-20"
                        src="https://res.cloudinary.com/dytpump6i/image/upload/v1699675474/bootstrap-4_gx7xnr.svg"
                        alt="html"
                      />
                    </span>
                    <p class="text-2xl font-extrabold text-dark-grey-900">
                      Bootrstrap
                    </p>
                  </div>
                  <div data-aos="zoom-in-up" class="flex flex-col items-center gap-3 px-8 py-10 border-2 border-orange-600  rounded-3xl shadow-main">
                    <span>
                      <img
                        className="all:h-8 all:w-8 lg:h-20 lg:w-20"
                        src="https://res.cloudinary.com/dytpump6i/image/upload/v1699675579/tailwindcss_b5umkv.svg"
                        alt="html"
                      />
                    </span>
                    <p class="text-2xl font-extrabold text-dark-grey-900">
                      Tailwind
                    </p>
                  </div>
                  <div class="flex flex-col items-center gap-3 px-8 py-10 border-2 border-orange-600  rounded-3xl shadow-main">
                    <span>
                      <img
                        className="all:h-8 all:w-8 lg:h-20 lg:w-20"
                        src="https://res.cloudinary.com/dytpump6i/image/upload/v1699722379/mongodb-icon-1_g3b76i.svg"
                        alt="html"
                      />
                    </span>
                    <p class="text-2xl font-extrabold text-dark-grey-900">
                      Mongo DB
                    </p>
                  </div>
                  <div data-aos="fade-up-left" class="flex flex-col items-center gap-3 px-8 py-10 border-2 border-orange-600  rounded-3xl shadow-main">
                    <span>
                      <img
                        className="all:h-8 all:w-8 lg:h-20 lg:w-20"
                        src="https://res.cloudinary.com/dytpump6i/image/upload/v1699722742/pngegg_gbpixu.png"
                        alt="html"
                      />
                    </span>
                    <p class="text-2xl font-extrabold text-dark-grey-900">
                     Git
                    </p>
                  </div>
                  <div data-aos="fade-down-right" class="flex flex-col items-center gap-3 px-8 py-10 border-2 border-orange-600  rounded-3xl shadow-main">
                    <span>
                      <img
                        className="all:h-8 all:w-8 lg:h-20 lg:w-20"
                        src="https://res.cloudinary.com/dytpump6i/image/upload/v1699722507/github-icon_w5e3jb.svg"
                        alt="html"
                      />
                    </span>
                    <p class="text-2xl font-extrabold text-dark-grey-900">
                      Github
                    </p>
                  </div>
                  <div data-aos="zoom-in-down" class="flex flex-col items-center gap-3 px-8 py-10 border-2 border-orange-600  rounded-3xl shadow-main">
                    <span>
                      <img
                        className="all:h-8 all:w-8 lg:h-20 lg:w-20"
                        src="https://res.cloudinary.com/dytpump6i/image/upload/v1699722897/postman_bnp3s0.svg"
                        alt="html"
                      />
                    </span>
                    <p class="text-2xl font-extrabold text-dark-grey-900">
                      Postman
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="all:ml-20 mt-14 grid grid-cols-3  justify-items-center   ">
            <div className="flex">
              <img
                className=" all:h-8 all:w-8 lg:h-14 lg:w-14"
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1699674116/logohtml_o0jgqg.svg"
                alt="html"
              />
           
            </div>
            <div className="flex mt-4">
              <img
                className="all:h-8 all:w-8 lg:h-14 lg:w-14 "
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1699674177/logoCss_vum7yd.svg"
                alt="html"
              />
           
            </div>
            <div className="flex mt-4">
              <img
                className="all:h-8 all:w-8 lg:h-14 lg:w-14"
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1699674205/logoJS_vihzto.svg"
                alt="html"
              />
       
            </div>
            <div className="flex mt-4">
              <img
                className="all:h-8 all:w-8 lg:h-14 lg:w-14"
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1699674238/react_ewim0s.svg"
                alt="html"
              />
         
            </div>
            <div className="flex mt-4">
              <img
                className="all:h-8 all:w-8 lg:h-14 lg:w-14"
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1699675645/vue-9_a1hd4x.svg"
                alt="html"
              />
        
            </div>
            <div className="flex mt-4">
              <img
                className="all:h-8 all:w-8 lg:h-14 lg:w-14"
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1699674680/nodejs-logo-svgrepo-com_axruvh.svg"
                alt="html"
              />
      
            </div>
            <div className="flex mt-4">
              <img
                className="all:h-8 all:w-8 lg:h-14 lg:w-14"
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1699675474/bootstrap-4_gx7xnr.svg"
                alt="html"
              />
      
            </div>
            <div className="flex mt-4">
              <img
                className="all:h-8 all:w-8 lg:h-14 lg:w-14"
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1699675579/tailwindcss_b5umkv.svg"
                alt="html"
              />
         
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default skills;
