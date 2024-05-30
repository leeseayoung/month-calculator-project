import React, { useState } from "react";

import AddInput from "../components/AddInput";
import AddMonth from "../components/AddMonth";
import AddExpenditure from "../components/AddExpenditure";

const Home = ({ expenses, setExpenses }) => {
  const [selectdMonth, setSelectdMonth] = useState(1);
  // console.log(expenses);

  //필터
  const filterExpenses = expenses.filter(
    (expense) => expense.selectdMonth === selectdMonth
  );
  return (
    <div style={{ background: "skyBlue" }}>
      {/* <지출을 등록하는 컴포넌트 /> */}
      <AddInput />

      {/* <'월' 을 선택하는 컴포넌트/> */}
      <AddMonth selectdMonth={selectdMonth} setSelectdMonth={setSelectdMonth} />

      {/* <지출을 리스팅해서 보여주는 컴포넌트 /> */}
      <AddExpenditure expenses={filterExpenses} />
    </div>
  );
};

export default Home;
