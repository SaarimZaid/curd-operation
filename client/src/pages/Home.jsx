import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    if (!localStorage.getItem("edulfin-user")) {
      navigate("/login");
    }
  });
  const navigate = useNavigate();
  return (
    <div className="bg-slate-500 text-white flex justify-center p-2 h-screen w-full">
      <h1>This is the home page</h1>
    </div>
  );
};

export default Home;
