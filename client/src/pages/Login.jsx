import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
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

const Login = () => {
  useEffect(() => {
    if (localStorage.getItem("edulfin-user")) {
      navigate("/");
    }
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialData = {
    email: "",
    password: "",
  };

  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handeSubmit = async (e) => {
    e.preventDefault();
    if (data.password !== "" || data.email !== "") {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.userNotFound) {
        toast.error("user not found", toastOptions);
        return;
      } else if (response.data.match) {
        toast.success("login successfull", toastOptions);
        localStorage.setItem(
          "edulfin-user",
          JSON.stringify(response.data.user)
        );
        dispatch(setBtnVisibilityTrue());
        navigate("/");
        return;
      } else if (!response.data.match) {
        toast.error("wrong password", toastOptions);
        return;
      }
    } else {
      toast.error("email and password are required", toastOptions);
      return;
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-full bg-zinc-950">
        <form
          className="flex flex-col justify-evenly items-center xl:w-1/2 md:w-2/3 w-full bg-zinc-950 p-4"
          onSubmit={handeSubmit}
        >
          <h1 className="text-white text-2xl mb-5">Login</h1>
          <input
            className="border-black border p-5 sm:w-2/5 mb-2"
            placeholder="Your Email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <input
            className="border-black border p-5 sm:w-2/5 mb-2"
            placeholder="**********"
            name="password"
            value={data.password}
            type="password"
            onChange={handleChange}
          />
          <button className="border border-slate-500 px-5 py-2 bg-green-500 text-black hover:bg-zinc-950 hover:text-white duration-500">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
