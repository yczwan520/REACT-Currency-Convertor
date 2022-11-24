import axios from "axios";
import { getExchangeRate } from "../ExchangeRate";
import moment from "moment";

jest.mock("axios");

describe("exchangerate api", () => {
  it("get exchange rate", async () => {
    const currency = "USD";
    const date = moment().format("YYYY-MM-DD");
    const mockData = {
      terms: {
        url: "https://www.bankofcanada.ca/terms/",
      },
      seriesDetail: {
        FXCADUSA: {
          label: "CAD/USD",
          description: "Canadian dollar to US dollar daily exchange rate",
          dimension: {
            key: "d",
            name: "Date",
          },
        },
      },
      observations: [{ d: "2022-11-17", FXCADUSD: { v: "0.7491" } }],
    };
    axios.get.mockReturnValueOnce({ data: mockData });
    const returnData = await getExchangeRate(currency, date);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(returnData).toEqual(mockData);
  });
});
