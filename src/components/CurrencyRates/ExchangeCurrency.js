import React, { useState, useEffect } from "react";
import { message, Select, Spin } from "antd";
import moment from "moment";
import style from "./ExchangeCurrency.module.scss";
// eslint-disable-next-line
import { DatePicker, Space } from "antd";
import { Input } from "antd";
import "antd/dist/antd.css"; //

const { Option } = Select;
const ExchangeCurrency = (props) => {
  const [currency, setCurrency] = useState("USD");
  const [rate, setRate] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [isLoading, setLoading] = useState(true);

  const handleDateChange = (date) => {
    setDate(moment(date).format("YYYY-MM-DD"));
  };

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = (amount * rate).toFixed(4);
  } else {
    toAmount = amount;
    fromAmount = (amount / rate).toFixed(4);
  }

  const fetchRate = () => {
    setLoading(true);
    const res = fetch(
      `https://www.bankofcanada.ca/valet/observations/FXCAD${currency}?start_date=${
        props.date ? props.date : date
      }&end_date=${props.date ? props.date : date}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.observations.length) {
          setRate(data.observations[0][`FXCAD${currency}`].v);
        } else {
          message.info("There is no exchange rate on this date!");
          setRate("");
        }
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchRate();
  }, [currency, date]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <div className={style.convertor}>
      <div>
        <h1>Currency Convertor</h1>
        <div class={style.date_picker}>
          <p className="date">Date</p>
          <DatePicker onChange={(date) => handleDateChange(date)} />
        </div>
        {isLoading && <Spin />}
        <div className={style.exchange_input}>
          <label className="input">
            <p>Amount of Foreign Currency</p>
            <Input
              type="number"
              placeholder="Type amount"
              value={toAmount}
              onChange={handleToAmountChange}
            />
          </label>
          <Select
            currency
            defaultValue="USD"
            style={{
              width: 120,
            }}
            onChange={(value) => setCurrency(value)}
          >
            <Option value="USD">USD</Option>
            <Option value="EUR">EUR</Option>
            <Option value="JPY">JPY</Option>
            <Option value="GBP">GBP</Option>
            <Option value="AUD">AUD</Option>
            <Option value="CHF">CHF</Option>
            <Option value="CNY">CNY</Option>
            <Option value="HKD">HKD</Option>
            <Option value="INR">INR</Option>
            <Option value="IDR">IDR</Option>
            <Option value="NZD">NZD</Option>
            <Option value="NOK">NOK</Option>
          </Select>
        </div>
        <div className={style.exchange_input}>
          <label className="input">
            <p>Amount of Canadian Dollar</p>
            <Input
              type="number"
              placeholder="type amount"
              value={fromAmount}
              onChange={handleFromAmountChange}
            />
          </label>
          <Select
            defaultValue="CAD"
            style={{
              width: 120,
            }}
            disabled
          >
            <Option value="CAD">CAD</Option>
          </Select>
        </div>
      </div>
      <div className={style.exchange_rate}>
        <p>Today's exchange rate is ${rate}</p>
      </div>
    </div>
  );
};
export default ExchangeCurrency;
