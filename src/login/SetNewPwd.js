import * as React from "react";
import { useNavigate } from "react-router-dom";
import { FiKey } from "react-icons/fi";

export default function SetNewPwd() {
  let navigate = useNavigate();
  const goBack = (e) => navigate(-1);

  return (
    <div className="bg-primary h-[100vh] pt-[100px]">
      <div className="flex flex-col w-[360px] mx-auto">
        <div className=" relative bg-[#F4EBFF]   rounded-full w-14 h-14 mx-auto">
          <FiKey className="absolute top-[16.5px] left-[16.5px] w-6 h-6 stroke-[#7F56D9] stroke-[2px]" />
        </div>

        <p className="static not-italic font-semibold text-3xl leading-[38px] mt-6 text-center text-primary ">
          Set new password
        </p>
        <p className="static not-italic font-medium text-base  align-top text-center  text-accent mb-[32px] mt-[12px] ">
          Your new password must be different to previously used passwords.
        </p>
        <p className="text-secondary mb-[6px] text-sm font-medium">password</p>
        <input
          className="h-[44px]  border rounded-lg w-full py-[10px] pl-[14px] pr-[38px] bg-primary text-secondary text-base focus:outline-none focus:shadow-outline"
          id=""
          type="password"
          placeholder=""
        />
        <p className=" text-accent mt-[6px] text-sm font-normal mb-[20px]">Must be at least 8 characters.</p>
        <p className=" text-secondary mt-[6px] text-sm font-medium ">Confirm password</p>
        <input
          className="h-[44px] border rounded-lg w-full py-[10px] pl-[14px] pr-[38px] bg-primary text-secondary text-base focus:outline-none focus:shadow-outline"
          id=""
          type="password"
          placeholder=""
        />
        <button className=" justify-center items-center static border border-[#7F56D9] rounded-lg bg-[#7F56D9] box-border  py-[10px] px-[19px] mt-[24px] mb-[32px] text-base text-white">
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
