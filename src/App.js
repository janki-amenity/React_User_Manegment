import logo from "./logo.svg";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import files here
import UserLogin from "./component/UserManagement/UserLogin";
import UserRegister from "./component/UserManagement/UserRegister";
import UserData from "./component/UserDataShow/UserData";
import UserForgotPassword from "./component/UserManagement/UserForgotPassword";
import UserResetPassword from "./component/UserManagement/UserResetPassword";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/signup" element={<UserRegister />} />
          <Route path="/user-data" element={<UserData />} />
          <Route path="/forgot-password" element={<UserForgotPassword />} />
          <Route path="/reset-password" element={<UserResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
