import React from "react";

import { quantum } from "ldrs";

quantum.register();

const loading = () => {
  return (
    <div className="flex justify-center">
      <l-quantum  size="90" speed="1.75" margin="28"  color="#EB3A00"></l-quantum>
    </div>
  );
};

export default loading;
