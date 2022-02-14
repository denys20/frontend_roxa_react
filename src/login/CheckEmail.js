import * as React from "react";
import { useNavigate } from "react-router-dom";

import { FiKey } from "react-icons/fi";

export default function CheckEmail() {
  let navigate = useNavigate();
  const goBack = (e) => navigate(-1);

  const gmailName = "name@gmail.com";

  return (
    <div className="bg-primary h-[100vh] pt-[100px]">
      <div className="flex flex-col w-[360px] mx-auto">
        <div className=" relative bg-[#F4EBFF]   rounded-full w-14 h-14 mx-auto">
          <FiKey className="absolute top-[16.5px] left-[16.5px] w-6 h-6 stroke-[#7F56D9] stroke-[2px]" />
        </div>

        <p className="static not-italic font-semibold text-3xl leading-[38px] mt-6 text-center text-primary ">
          Check your email
        </p>
        <p className="static not-italic font-medium text-base  align-top text-center  text-accent mb-[32px] mt-[12px] ">
          We sent a verification link to <br /> {gmailName}
        </p>

        <button className=" justify-center items-center static border border-[#7F56D9] rounded-lg bg-[#7F56D9] box-border  py-[10px] px-[19px]  mb-[32px] text-base text-white">
          Reset password
        </button>
        <button
          onClick={goBack}
          className=" mx-auto text-sm font-medium leading-5 text-accent"
        >
          Back to log in
        </button>
      </div>
    </div>
  );
}
