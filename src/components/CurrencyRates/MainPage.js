import React from "react";
// import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import style from "./ExchangeCurrency.module.scss";

// import ExchangeCurrency from "./components/CurrencyRates/ExchangeCurrency";

const MainPage = (props) => {
  return (
    <div className={style.main_page}>
      <div>
        <h1>Currency Convertor</h1>
        <h2>let's convert!</h2>
        <Link to="/convertor">
          <button>
            Get started
            {/* <Icon name="right arrow" inverted /> */}
          </button>
        </Link>
      </div>
    </div>
  );
};
export default MainPage;
