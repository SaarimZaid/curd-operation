import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Counter from "./Counter";

const Home = () => {
  return (
    <div className="bg-slate-900 text-white flex flex-col justify-center items-center gap-4 p-2 h-screen w-full">
      <h1>Home page</h1>
      <Counter />
    </div>
  );
};

export default Home;
