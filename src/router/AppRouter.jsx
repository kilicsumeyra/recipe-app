import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import { GlobalStyles } from "../components/globalStyles/GlobalStyles";
import Navbar from "../components/nav/Navbar";
const AppRouter = () => {
  return (
    <BrowserRouter>
    <GlobalStyles/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<PrivateRouter />} >
        <Route path="" element={<About />} />
        </Route>
        <Route path="detail" element={<PrivateRouter/>}>
          <Route path="" element={<Detail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
