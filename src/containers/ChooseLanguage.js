import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function ChooseLanguage() {
  let navigate = useNavigate();
  const goBack = (e) => navigate(-1);
  const language_Contiune = () => {
    navigate("/style/language/invite");
  };

  return (
    <div className="bg-primary h-[100vh] pt-[100px]">
      <div className="flex flex-col w-[600px] mx-auto">
        <p className="static not-italic font-medium text-3xl leading-[38px] align-top text-center text-primary ">
          Choose a Language
        </p>
        <p className="static not-italic font-medium text-base leading-[24px] align-top text-center  text-accent mb-[32px] mt-[12px] ">
          You can change the language at anytime through the preferences in
          settings.
        </p>
        <div className="flex flex-row">
          <div className=" w-1/2 flex flex-col border border-gray-300 rounded-l-lg">
            <button className="mx-auto mt-[91px] mb-[77px]">
              <span className="static not-italic font-medium text-2xl align-top text-center  text-secondary mt-[14px] mb-[20px] ">
                English
              </span>
            </button>
          </div>
          <div className=" w-1/2 flex flex-col border border-gray-300 rounded-r-lg">
            <button className="mx-auto mt-[91px] mb-[77px]">
              <span className="static not-italic font-medium text-2xl align-top text-center  text-secondary mt-[14px] mb-[20px]">
                noEnglish
              </span>
            </button>
          </div>
        </div>
        <button
          onClick={language_Contiune}
          className="justify-center items-center static border border-[#7F56D9] rounded-lg bg-[#7F56D9] box-border  py-[10px] mt-[24px] text-base text-white"
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
