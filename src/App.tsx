import Authentication from "./pages/AuthenticationPage";
import { Routes, Route } from "react-router-dom";
import ResetPasswordPage from "./pages/ResetPasswordPage";
const App = () => {
  return (
    <Routes>
      <Route path="authenticate" element={<Authentication />}></Route>
      <Route path="forgotpassword" element={<ResetPasswordPage />}></Route>
    </Routes>
  );
};

export default App;
