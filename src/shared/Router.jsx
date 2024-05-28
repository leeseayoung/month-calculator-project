import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { useState } from "react";

const Router = () => {
  const [selectedMonth, setSelectedMonth] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              selectedMonth={selectedMonth}
              setSelectedMonth={setSelectedMonth}
            />
          }
        />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
