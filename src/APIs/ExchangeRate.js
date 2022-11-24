import axios from "axios";

export const getExchangeRate = async (currency, date) => {
  const { data } = await axios.get(
    `https://www.bankofcanada.ca/valet/observations/FXCAD${currency}?start_date=${date}&end_date=${date}`
  );
  console.log(data);
  return data;
};
