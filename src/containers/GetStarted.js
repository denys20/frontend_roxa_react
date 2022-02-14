import halfmoon_img from "../assets/halfmoon.svg";
import { useNavigate } from "react-router-dom";


function GetStarted() {

  let navigate = useNavigate();
  const started_Continue = (e) => navigate("/style");

  return (
   
    <div className="bg-primary h-[100vh] pt-[150px]">
      <div className="flex flex-col  mx-auto">
        <img
          src={halfmoon_img}
          alt="halfmoon_img"
          className="w-20  mx-auto mb-[32px]"
        />
        <div className="w-[488px] mx-auto">
          <p className="not-italic font-bold text-6xl leading-[72px] tracking-tight text-primary text-center mb-3">
            Welcome to Roxa
          </p>
          <p className="not-italic font-normal text-base text-center text-accent mb-[33px] ">
            Roxa helps you to streamline your day to day business operation
          </p>
          <button
            type="button"
            onClick={started_Continue}
            className="w-full h-11 justify-center items-center text-base border border-[#7F56D9] rounded-lg bg-[#7F56D9] box-border p-auto text-white"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
