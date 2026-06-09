import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-bold">Login With</h1>

      <button className="btn btn-outline w-full text-blue-500 border-2">
        <FaGoogle />
        Login with Google
      </button>

      <button className="btn btn-outline w-full border-2"><FaGithub />Login with Github</button>
    </div>
  );
};

export default RightSideBar;
