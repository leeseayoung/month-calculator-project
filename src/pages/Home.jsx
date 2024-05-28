import React from "react";

import AddInput from "../components/AddInput";
import AddMonth from "../components/AddMonth";
import AddExpenditure from "../components/AddExpenditure";

const Home = ({ selectedMonth, setSelectedMonth }) => {
  return (
    <div style={{ background: "skyBlue" }}>
      {/* <지출을 등록하는 컴포넌트 /> */}
      <AddInput />

      {/* <'월' 을 선택하는 컴포넌트/> */}
      <AddMonth
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />

      {/* <지출을 리스팅해서 보여주는 컴포넌트 /> */}
      <AddExpenditure />
    </div>
  );
};

export default Home;
