import React from "react";

import { quantum } from "ldrs";

quantum.register();


const loading = () => {


  return (
    <div className=" w-screen h-screen  flex items-center justify-center " >
      <l-quantum  size="90"  speed="1.75"  color="#EB3A00"></l-quantum>
    </div>
  );
};

export default loading;
