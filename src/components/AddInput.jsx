import React, { useState } from "react";

// 메인 스타일
const mainBox = {
  display: "flex",
  gap: "20px",

  justifyContent: "center",
  backgroundColor: "white",
  borderRadius: "10px",
  padding: "20px",
  border: "px solid #ccc",
};

const inputStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

const mainButton = {
  alignSelf: "center",
  padding: "10px 20px",
  borderRadius: "5px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  cursor: "pointer",
};

const AddInput = () => {
  //날짜
  const [date, setDate] = useState("");
  //항목
  const [item, setItem] = useState("");
  //금액
  const [amount, setAmount] = useState("");
  //내용
  const [description, setDescription] = useState("");

  // const handleAdd = async () => {
  //   const [data, error] = await supabase
  //     .from("EXPENDITURE_SAMPLE")
  //     .insert({ date, item, amount, description });
  //   if (error) {
  //     console.log("에러!!");
  //   } else {
  //     alert("데이터 저장 완료!");
  //   }
  // };

  return (
    <div style={mainBox}>
      <div style={inputStyle}>
        <label>날짜</label>
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <div style={inputStyle}>
        <label>항목</label>
        <input
          type="text"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
      </div>
      <div style={inputStyle}>
        <label>금액</label>
        <input
          type="int"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>
      <div style={inputStyle}>
        <label>내용</label>
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <button style={mainButton}>저장</button>
    </div>
  );
};

export default AddInput;
