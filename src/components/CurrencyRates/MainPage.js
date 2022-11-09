import React from "react";
import { Link } from "react-router-dom";
import style from "./ExchangeCurrency.module.scss";

const MainPage = (props) => {
  return (
    <div className={style.main_page}>
      <div>
        <h1>Currency Convertor</h1>
        <h2>let's convert!</h2>
        <Link to="/convertor">
          <button>
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
};
export default MainPage;
