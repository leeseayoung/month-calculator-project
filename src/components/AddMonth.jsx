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
  const monthNames = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  return (
    <div style={monthBox}>
      {months.map((month, index) => (
        <button
          key={month}
          style={monthBtn}
          onClick={() => {
            alert(month + "월");
          }}
        >
          {monthNames[index]}
        </button>
      ))}
    </div>
  );
};

export default AddMonth;
