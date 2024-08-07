import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import pancake from "../assets/login pic.svg";
import line from "../assets/line.svg";
import google from "../assets/google logo.svg";
import facebook from "../assets/facebook logo.svg";
import logo from "../assets/black logo.svg";
import UserContext from "../context/UserContext";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ["registerForm"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/home");
    },
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="bg-white h-[100vh] flex items-center justify-center relative">
      <img src={logo} alt="logo" className="absolute top-4 left-4 w-48" />
      <div className="w-full flex justify-center bg-white">
        <div className="w-[50%] px-6 py-8 bg-white">
          <h2 className="flex justify-center text-3xl text-black font-semibold mb-6">
            Create an Account
          </h2>
          <form onSubmit={handleFormSubmit}>
            Username
            <div className="mb-4">
              <input
                type="text"
                placeholder="Choose your username"
                name="username"
                id="username"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-zinc-300 bg-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            Enter your Password
            <div className="mb-6">
              <input
                name="password"
                placeholder="Choose your password"
                type="password"
                id="password"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-zinc-300 bg-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            Confirm your Password
            <div className="mb-6">
              <input
                name="confirmpassword"
                placeholder="Confirm your password"
                type="password"
                id="confirmpassword"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-zinc-300 bg-zinc-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="">
              Already have an account?
              <Link className=" font-semibold" to="Login">
                Login Here!
              </Link>
            </div>
            <div className="mb-6">
              <Link className=" font-semibold" to="Home">
                Continue as a guest
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#EBC76B] text-black rounded-md hover:bg-amber-500 transition-colors mb-4"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="flex justify-center gap-1">
            <div>
              <img src={line} className="h-full w-full" />
            </div>
            or
            <div>
              <img src={line} className="h-full w-full" />
            </div>
          </div>
          <div className="flex justify-center align-middle items-center ml-9">
            <div>
              <img src={google} className="h-full w-[50%]" />
            </div>
            <div>
              <img src={facebook} className="h-full w-[50%]" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[100vh] overflow-hidden">
        <img src={pancake} alt="pancake" className="object-contain" />
      </div>
    </div>
  );
};

export default Register;
