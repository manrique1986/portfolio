import React from "react";
import Layout from "../layout";

const sobreMi = () => {
  return (
  
    <Layout>
      <div className="flex flex-col">
        <div className=" bg-img-sobremi bg-cover w-screen h-screen  ">
        <div className="  lg:ml-60 mt-14 bg-[#F7B200] lg:h-[100px] lg:w-[275.8px]  rounded-xl ">
          <h1 className="justify-center items-center     font-bold text-center text-[#EB3A00]">Sobre mi</h1>
        </div>
        <h2 className="flex justify-center text-[#EB3A00] lg:text-[52px] " >biografia e introduccion</h2>
        <div className="">
        <p className="px-72 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam consequatur, fuga ad ipsam perferendis neque itaque quas libero magnam atque ex praesentium error labore recusandae voluptate molestias cum nesciunt.</p>
        <p className="px-72 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam consequatur, fuga ad ipsam perferendis neque itaque quas libero magnam atque ex praesentium error labore recusandae voluptate molestias cum nesciunt.</p>
        </div>
        </div>
       

      </div>
    </Layout>
  );
};

export default sobreMi;
