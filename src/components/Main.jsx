import React from "react";

const columnStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "20px 0",
};

//메인 저장 버튼
const buttonStyle = {
  boxSizing: "border-box",
  backgroundColor: "skyblue",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "3px",
  fontSize: "12px",
};
<button style={buttonStyle}>저장</button>;

//월 버튼 꾸미기
const squareStyle = {
  width: "100px",
  height: "100px",
  border: "1px solid green",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Main = () => {
  return (
    <div style={{ background: "red" }}>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <div style={columnStyle}>
          <label>날짜</label>
          <input />
        </div>
        <div style={columnStyle}>
          <label>항목</label>
          <input />
        </div>
        <div style={columnStyle}>
          <label>금액</label>
          <input />
        </div>
        <div style={columnStyle}>
          <label>내용</label>
          <input />
        </div>
        <button style={buttonStyle}>저장</button>
      </div>

      {/* 월 표시 */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <button style={squareStyle}>1월</button>
        <button style={squareStyle}>2월</button>
        <button style={squareStyle}>3월</button>
        <button style={squareStyle}>4월</button>
        <button style={squareStyle}>5월</button>
        <button style={squareStyle}>6월</button>
        <button style={squareStyle}>7월</button>
        <button style={squareStyle}>8월</button>
        <button style={squareStyle}>9월</button>
        <button style={squareStyle}>10월</button>
        <button style={squareStyle}>11월</button>
        <button style={squareStyle}>12월</button>
      </div>

      {/* 지출 표시 하는곳 */}
      <div>
        <p>2024-5-12 식비 120000원</p>
      </div>
    </div>
  );
};

export default Main;
