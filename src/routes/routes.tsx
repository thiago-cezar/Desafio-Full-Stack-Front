import { Navigate, Route, Routes } from "react-router-dom";
import MainDashboard from "../pages/dashboard";
import MainLogin from "../pages/login";
import { MainRegister } from "../pages/register";
export default function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<MainLogin />} />
      <Route path="/register" element={<MainRegister />} />
      <Route path="/dashboard" element={< MainDashboard/>} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
