import React from "react";
import { BiError } from "react-icons/bi";

function Custom500() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-5 text-3xl text-brand-white">
      <BiError className="text-red-700" />
      <h1>Something went Wrong!</h1>
    </div>
  );
}

export default Custom500;
