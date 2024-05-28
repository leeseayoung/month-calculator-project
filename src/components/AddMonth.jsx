import React, { useState } from "react";
//월 버튼 꾸미기
const monthBtn = {
  width: "100px",
  height: "100px",
  border: "1px solid green",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
//월 박스
const monthBox = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
  margin: "0 auto",
  maxWidth: "700px",
  marginTop: "40px",
};

const AddMonth = ({ selectdMonth, setSelectdMonth }) => {
  //map으로 만들기!
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const monthsMap = months.map((month) => {
    return month + 1;
  });

  return (
    <div style={monthBox}>
      <button style={monthBtn}>1월</button>
      <button style={monthBtn}>2월</button>
      <button style={monthBtn}>3월</button>
      <button style={monthBtn}>4월</button>
      <button style={monthBtn}>5월</button>
      <button style={monthBtn}>6월</button>
      <button style={monthBtn}>7월</button>
      <button style={monthBtn}>8월</button>
      <button style={monthBtn}>9월</button>
      <button style={monthBtn}>10월</button>
      <button style={monthBtn}>11월</button>
      <button style={monthBtn}>12월</button>
    </div>
  );
};

export default AddMonth;
