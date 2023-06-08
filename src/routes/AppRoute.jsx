import React from "react";
import Gen2 from "../pages/Gen2";
import Gen3 from "../pages/Gen3";
import Gen1 from "../pages/Gen1";
import { Routes, Route } from "react-router-dom";
import Gen4 from "../pages/Gen4";
import Gen5 from "../pages/Gen5";
import Gen6 from "../pages/Gen6";
import Gen7 from "../pages/Gen7";
import Gen8 from "../pages/Gen8";

const AppRoute = ({ type }) => {
  return (
    <Routes>
      <Route path="/" element={<Gen1 type={type} />} />
      <Route path="/gen2" element={<Gen2 type={type} />} />
      <Route path="/gen3" element={<Gen3 type={type} />} />
      <Route path="/gen4" element={<Gen4 type={type} />} />
      <Route path="/gen5" element={<Gen5 type={type} />} />
      <Route path="/gen6" element={<Gen6 type={type} />} />
      <Route path="/gen7" element={<Gen7 type={type} />} />
      <Route path="/gen8" element={<Gen8 type={type} />} />
    </Routes>
  );
};

export default AppRoute;
