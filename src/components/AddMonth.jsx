import Home from "../pages/Home";
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

  return (
    <div style={monthBox}>
      {months.map((month) => (
        <button
          key={month}
          onClick={() => {
            setSelectdMonth(month);
          }}
        >{`${month}월`}</button>
      ))}
    </div>
  );
};

export default AddMonth;
