import React from "react";
import Layout from "../layout";

const skills = () => {
  // bg-cover bg w-screen h-screen all:bg-cover bg-top 
  return (
    <Layout>
      <div className="flex ">
        <div className="bg-img-skills  bg-cover w-screen h-screen bg-top">
          <div className="  lg:ml-64 all:mt-2   lg:mt-14 bg-[#F7B200]  ml-10 w-56 lg:h-[60px] lg:w-[275.8px] lg:pt-2  rounded-xl ">
            <h1 className="justify-center items-center all:text-[30px]    font-bold text-center text-[#EB3A00]">
             Skills
            </h1>
          </div>
          <div className="all:ml-20 mt-14 grid grid-cols-2 justify-items-center  gap-4 ">
            <div className="flex">
              <img
                className=" all:h-8 all:w-8 lg:h-14 lg:w-14"
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1699674116/logohtml_o0jgqg.svg"
                alt="html"
              />
              <h4>HTML</h4>
            </div>
            <div className="flex mt-4">
              <img
                className="all:h-8 all:w-8 lg:h-14 lg:w-14 "
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1699674177/logoCss_vum7yd.svg"
                alt="html"
              />
              <h4>Css</h4>
            </div>
            <div className="flex mt-4">
              <img
                className="all:h-8 all:w-8 lg:h-14 lg:w-14"
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1699674205/logoJS_vihzto.svg"
                alt="html"
              />
              <h4>Javascript</h4>
            </div>
            <div className="flex mt-4">
              <img
                className="all:h-8 all:w-8 lg:h-14 lg:w-14"
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1699674238/react_ewim0s.svg"
                alt="html"
              />
              <h4>React</h4>
            </div>
            <div className="flex mt-4">
              <img
                className="all:h-8 all:w-8 lg:h-14 lg:w-14"
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1699675645/vue-9_a1hd4x.svg"
                alt="html"
              />
              <h4>Vue</h4>
            </div>
            <div className="flex mt-4">
              <img
                className="all:h-8 all:w-8 lg:h-14 lg:w-14"
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1699674680/nodejs-logo-svgrepo-com_axruvh.svg"
                alt="html"
              />
              <h4>Node JS</h4>
            </div>
            <div className="flex mt-4">
              <img
                className="all:h-8 all:w-8 lg:h-14 lg:w-14"
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1699675474/bootstrap-4_gx7xnr.svg"
                alt="html"
              />
              <h4>Bootstrap</h4>
            </div>
            <div className="flex mt-4">
              <img
                className="all:h-8 all:w-8 lg:h-14 lg:w-14"
                src="https://res.cloudinary.com/dytpump6i/image/upload/v1699675579/tailwindcss_b5umkv.svg"
                alt="html"
              />
              <h4>Tailwind</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default skills;
