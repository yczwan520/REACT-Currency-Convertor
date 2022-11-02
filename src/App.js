import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import "./App.css";
import moment from "moment";
import ExchangeCurrency from "./ExchangeCurrency";

const App = () => {
  const [date, setDate] = useState("");

  const handleDateChange = (date) => {
    setDate(moment(date).format("YYYY-MM-DD"));
  };

  return (
    <div>
      <h1>Currency Convertor</h1>
      <p className="date">date</p>
      <DatePicker
        onChange={(date) => handleDateChange(date)}
      />
      <ExchangeCurrency date={date} />
    </div>
  );
};
export default App;
