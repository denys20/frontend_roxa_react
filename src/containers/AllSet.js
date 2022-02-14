import * as React from "react";

import { useNavigate } from "react-router-dom";
export default function AllSet() {
  let navigate = useNavigate();
  const goBack = (e) => navigate(-1);
  const openRexa = () => {
    navigate("/style/language/invite");
  };

  return (
    <div className="bg-primary h-[100vh] pt-[100px]">
      <div className="flex flex-col w-[360px] mx-auto">
        <p className="static not-italic font-medium text-3xl leading-[38px] align-top text-center text-primary ">
          You are all set!
        </p>
        <p className="static not-italic font-medium text-base  align-top text-center  text-accent mb-[32px] mt-[12px] ">
          You are now ready to explore our features
        </p>

        <button
          onClick={openRexa}
          className="  justify-center items-center static border border-[#7F56D9] rounded-lg bg-[#7F56D9] box-border  py-[10px] px-[19px] mt-[24px] mb-[32px] text-base text-white"
        >
          Open Roxa
        </button>
        <button
          onClick={goBack}
          className=" w-[84px] mx-auto mt-[32px] text-sm font-medium leading-5 text-accent"
        >
          Back
        </button>
      </div>
    </div>
  );
}
