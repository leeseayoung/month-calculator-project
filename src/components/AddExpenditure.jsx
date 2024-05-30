import React from "react";

const AddExpenditure = ({ expenses }) => {
  return (
    <div>
      {expenses.map((event) => {
        return (
          <div key={event.id}>
            <span>{`날짜 : ${event.date} --  항목 : ${event.item} -- 내용 : ${event.description}  -- 가격: ${event.amount}원`}</span>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default AddExpenditure;
