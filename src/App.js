// Router tool
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import LoginPage from "./views/login/sesion.login";
import PrincipalPage from "./views/principal/principal";
import RegisterPage from "./views/register/register";
import WelcomePage from "./views/welcome/welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage render={true} />}></Route>
        <Route
          path="/register"
          element={<RegisterPage render={true} />}
        ></Route>
        <Route path="/onLive" element={<PrincipalPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
