import React from "react";
import Nav from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/CurrencyRates/MainPage";
import ExchangeCurrency from "./components/CurrencyRates/ExchangeCurrency";
import Goback from "./components/CurrencyRates/Goback";
// import { Exception } from "sass";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route index element={<MainPage />} /> */}
        <Route element={<Nav />}>
          <Route path="/convertor" element={<ExchangeCurrency />} />
          <Route path="/Goback" element={<Goback />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
