import React, { useState, useEffect } from "react";
import { message, Select, Spin } from "antd";
import moment from "moment";
// eslint-disable-next-line
import "antd/dist/antd.css"; //

const { Option } = Select;
const ExchangeCurrency = (props) => {
  const [currency, setCurrency] = useState("USD");
  const [rate, setRate] = useState("");
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [isLoading, setLoading] = useState(true);

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
  }, [currency, props.date]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <div>
      <div>
        {isLoading && <Spin />}
        <form className="form1">
          <label className="input">
            Amount of Foreign Currency:
            <input
              type="number"
              name="foreignAmount"
              value={toAmount}
              onChange={handleToAmountChange}
            />
          </label>
          <Select
            currency
            defaultValue="USD"
            style={{
              width: 120
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
        </form>
        <form className="form2">
          <label className="input">
            Amount of Canadian Dollar:
            <input
              type="number"
              name="cadAmount"
              value={fromAmount}
              onChange={handleFromAmountChange}
            />
          </label>

          <Select
            defaultValue="CAD"
            style={{
              width: 120
            }}
            disabled
          >
            <Option value="CAD">CAD</Option>
          </Select>
        </form>
      </div>
      <div>
        <p>Today's exchange rate is ${rate}</p>
      </div>
    </div>
  );
};
export default ExchangeCurrency;
