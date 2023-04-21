import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setBtnVisibilityFalse } from "../redux/reducers/navbar";

const Navbar = () => {
  const dispatch = useDispatch();
  const btnVisibility = useSelector((state) => state.navbar);

  return (
    <div className="flex justify-evenly items-center w-full text-white">
      {btnVisibility && <Link to="/">Home</Link>}
      {!btnVisibility && <Link to="/login">Login</Link>}
      {!btnVisibility && <Link to="/register">Register</Link>}
      {btnVisibility && (
        <Link to="/logout" onClick={() => dispatch(setBtnVisibilityFalse())}>
          Logout
        </Link>
      )}
    </div>
  );
};

export default Navbar;
