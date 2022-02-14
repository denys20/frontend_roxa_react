import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import GetStarted from "./containers/GetStarted";
import ChooseStyle from "./containers/ChooseStyle";
import ChooseLanguage from "./containers/ChooseLanguage";
import InviteYourTeam from "./containers/InviteYourTeam";
import AllSet from "./containers/AllSet";
import Login from "./login/Login";
import ForgetPwd from "./login/ForgetPwd";
import SetNewPwd from "./login/SetNewPwd";
import CheckEmail from "./login/CheckEmail";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/style" element={<ChooseStyle />} />
        <Route path="/style/language" element={<ChooseLanguage />} />
        <Route path="/style/language/invite" element={<InviteYourTeam />} />
        <Route path="/style/language/invite/allset" element={<AllSet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgetPwd />} />
        <Route path="/setpwd" element={<SetNewPwd />} />
        <Route path="/checkemail" element={<CheckEmail />} />
        
      </Routes>
    </Router>
  );
}
