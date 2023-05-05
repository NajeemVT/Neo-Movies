import React from "react";
import { BiError } from "react-icons/bi";

const Error = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-5 text-3xl text-brand-white">
      <BiError className="text-red-700" />
      <h1>No Data Found!</h1>
    </div>
  );
};

export default Error;
