import * as React from "react";

import { useNavigate } from "react-router-dom";
export default function InviteYourTeam() {
  let navigate = useNavigate();
  const goBack = (e) => navigate(-1);
  const invite_Continue = () => {
    navigate("/style/language/invite/allset");
  };

  return (
    <div className="bg-primary h-[100vh] pt-[100px]">
      <div className="flex flex-col w-[600px] mx-auto">
        <p className="static not-italic font-medium text-3xl leading-[38px] align-top text-center text-primary ">
          Invite your team
        </p>
        <p className="static not-italic font-medium text-base  align-top text-center  text-accent mb-[32px] mt-[12px] ">
          Roxa is meant to be used with your team, Invite some co-workers to
          test out with.
        </p>
        <div className="w-[564px] flex flex-col mx-auto mt-[32px] pl-[40px] border-b rounded-md">
          <input
            className="h-[70px] shadow appearance-none border rounded w-full pb-[10px] px-[14px] bg-primary text-secondary text-base focus:outline-none focus:shadow-outline"
            id=""
            type="text"
            placeholder="Enter list emails or phone numbers with comma (,)"
          />
          <button className=" w-[124px] justify-center items-center static border border-[#7F56D9] rounded-lg bg-[#7F56D9] box-border  py-[10px] px-[19px] mt-[24px] mb-[32px] text-base text-white">
            Send invite
          </button>
        </div>
        <button
          onClick={invite_Continue}
          className="w-[559px] mx-auto justify-center items-center static border border-[#D0D5DD] rounded-lg  box-border  py-[10px] mt-[32px] text-base text-primary"
        >
          Continue
        </button>
        <button
          onClick={goBack}
          className=" w-[84px] mx-auto mt-[32px] text-sm font-medium leading-5 text-accent"
        >
          Go back
        </button>
      </div>
    </div>
  );
}
