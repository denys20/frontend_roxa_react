import * as React from "react";
import { useNavigate } from "react-router-dom";
import halfmoon_img from "../assets/halfmoon.svg";

export default function Login() {
  let navigate = useNavigate();
  const goBack = (e) => navigate(-1);

  

  return (
    <div className="bg-primary h-[100vh] pt-[100px]">
      <div className="flex flex-col w-[360px] mx-auto">
        <img src={halfmoon_img} className="w-12 mx-auto" />
        <p className="static not-italic font-semibold text-3xl leading-[38px] mt-6 text-center text-primary ">
          Log in to your account
        </p>
        <p className="static not-italic font-medium text-base  align-top text-center  text-accent mb-[32px] mt-[12px] ">
          Welcome back! Please enter your details.
        </p>
        <div className="flex flex-col ">
          <input
            className="h-[44px] shadow appearance-none border rounded-lg w-full py-[10px] px-[14px] mb-[20px] bg-primary text-secondary text-base focus:outline-none focus:shadow-outline"
            id=""
            type="text"
            placeholder="Enter your email"
          />
          <input
            className="h-[44px] shadow appearance-none border rounded-lg w-full py-[10px] pl-[14px] pr-[48px] bg-primary text-secondary text-base focus:outline-none focus:shadow-outline"
            id=""
            type="password"
            placeholder="password"
          />
          <div className="flex flex-row mt-6">
              <input type="checkbox" className="w-4 mt-[6px]"></input>
              <span className="text-sm font-medium text-secondary ml-2">Remember for 30 days</span>
              <span className=" text-sm font-medium text-[#6941C6]  ml-16">Forgot password</span>
          </div>
          <button className="transition duration-200 ease-in-out justify-center items-center static border border-[#7F56D9] rounded-lg bg-[#7F56D9] box-border  py-[10px] px-[19px] mt-[24px] mb-[32px] text-base text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
