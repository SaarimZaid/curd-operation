import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";

// redux
import { useDispatch } from "react-redux";
import { setBtnVisibilityTrue } from "../redux/reducers/navbar";

const toastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: true,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: "dark",
};

const Register = () => {
  useEffect(() => {
    if (localStorage.getItem("edulfin-user")) {
      navigate("/");
    }
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handeSubmit = async (e) => {
    e.preventDefault();
    if (data.password === data.confirmPassword) {
      const response = await axios.post(
        "http://localhost:5000/auth/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.userAlreadyExists) {
        toast.error("user already exists", toastOptions);
        return;
      }
      if (response.data.userCreated) {
        toast.success("user created", toastOptions);
        localStorage.setItem(
          "edulfin-user",
          JSON.stringify(response.data.user)
        );
        dispatch(setBtnVisibilityTrue());
        navigate("/");
        return;
      }
    } else {
      toast.error("password and confirmPassword does not match", toastOptions);
      return;
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-full bg-zinc-950">
        <form
          className="flex flex-col justify-evenly items-center xl:w-1/2 md:w-2/3 w-full p-4 bg-zinc-950"
          onSubmit={handeSubmit}
        >
          <h1 className="text-white text-2xl mb-5">Register</h1>
          <input
            className="border-black border p-5 sm:w-2/5 mb-2"
            placeholder="Your Name"
            name="name"
            type="text"
            value={data.name}
            onChange={handleChange}
            required
          />
          <input
            className="border-black border p-5 sm:w-2/5 mb-2"
            placeholder="Your Email"
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
            required
          />
          <input
            className="border-black border p-5 sm:w-2/5 mb-2"
            placeholder="Enter Your Password"
            name="password"
            value={data.password}
            type="password"
            onChange={handleChange}
            required
          />
          <input
            className="border-black border p-5 sm:w-2/5 mb-2"
            placeholder="Re-Enter Your Password"
            name="confirmPassword"
            value={data.confirmPassword}
            type="password"
            onChange={handleChange}
            required
          />
          <button className="border border-slate-500 px-5 py-2 bg-green-500 text-black hover:bg-zinc-950 hover:text-white duration-500">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
