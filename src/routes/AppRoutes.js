import { Route, Routes } from "react-router-dom";
import Exam from "../pages/Exam";
import Login from "../pages/Login";
import Result from "../pages/Result";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Exam />} />
      <Route path="/login" element={<Login />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default AppRoutes;