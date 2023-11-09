import React from "react";
import Layout from "../layout";

const skills = () => {
  return (
    <Layout>
      <div className="flex">
        <div className="bg-img-skills bg-cover w-screen h-screen  bg-top">
          <div className="  lg:ml-64 all:mt-2   lg:mt-14 bg-[#F7B200]  ml-10 w-56 lg:h-[60px] lg:w-[275.8px] lg:pt-2  rounded-xl ">
            <h1 className="justify-center items-center all:text-[30px]    font-bold text-center text-[#EB3A00]">
              Sobre mi
            </h1>
          </div>
          <div className="mt-20  ml-80">
            <div className="">
              <img
                className="h-14 w-14"
                src="/src/assets/logohtml.svg"
                alt="html"
              />
              <h1>HTML</h1>
            </div>
            <div className="">
              <img
                className="h-14 w-14 "
                src="/src/assets/logoCss.svg"
                alt="html"
              />
              <h1>CSS</h1>
            </div>
            <div className="">
              <img
                className="h-14 w-14"
                src="/src/assets/logoJS.svg"
                alt="html"
              />
              <h1>JAVASCRIPT</h1>
            </div>
            <div className="">
              <img
                className="h-14 w-14"
                src="/src/assets/react.svg"
                alt="html"
              />
              <h1>REACT</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default skills;
