import * as React from "react";
import lighttheme_img from "../assets/lighttheme.png";
import blacktheme_img from "../assets/blacktheme.png";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../themeContext";

export default function ChooseStyle() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const lightTheme = () => {
    return setTheme("light");
  };
  const darkTheme = () => {
    return setTheme("dark");
  };
  let navigate = useNavigate();
  const goBack = (e) => navigate(-1);
  const style_Continue = () => {
    navigate("/style/language");
  };
  return (
    <div className="bg-primary h-[100vh] pt-[100px]">
      <div className="flex flex-col  w-[600px] mx-auto ">
        <p className="static not-italic font-medium text-3xl leading-[38px] align-top text-center text-primary ">
          Choose your style
        </p>
        <p className="static not-italic font-medium text-base leading-[24px] align-top text-center  text-accent mb-[32px] mt-[12px] ">
          You can change the UI Style anytime through the preferences in
          settings.
        </p>
        <div className="flex flex-row">
          <div className="group w-1/2 flex flex-col border border-gray-300 rounded-l-lg">
            <button
              onClick={lightTheme}
              className=" border-4 border-[#5C66D5] border-opacity-0 group-hover:border-opacity-100 focus:border-opacity-100 rounded-md w-[188px] mx-auto mt-[34px]"
            >
              <img src={lighttheme_img} alt="lighttheme_img"></img>
            </button>
            <p className="static not-italic font-medium text-base leading-[24px] align-top text-center  text-secondary mt-[14px] mb-[20px] ">
              Light
            </p>
          </div>

          <div className=" w-1/2 group flex flex-col border border-gray-300 rounded-r-lg">
            <button
              onClick={darkTheme}
              className=" border-4 border-[#5C66D5] border-opacity-0 group-hover:border-opacity-100 focus:border-opacity-100 rounded-md w-[188px] mx-auto mt-[34px]"
            >
              <img src={blacktheme_img} alt="blacktheme_img"></img>
            </button>
            <p className="static not-italic font-medium text-base leading-[24px] align-top text-center  text-secondary mt-[14px] mb-[20px]">
              Black
            </p>
          </div>
        </div>
        <button
          onClick={style_Continue}
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
