import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ExchangeCurrency from "../ExchangeCurrency";
import "@testing-library/jest-dom";

describe("ExchangeCurrency page", () => {
  const pageInfo1 = "Amount of Foreign Currency";
  const pageInfo2 = "Amount of Canadian Dollar";
  const pageInfo3 = "Today's exchange rate is $";

  it("renders the ExchangeCurrency page", () => {
    const { container } = render(
      <MemoryRouter>
        <ExchangeCurrency />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
    expect(
      screen.getByText(pageInfo1, pageInfo2, pageInfo3)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("spinbutton", { name: "Amount of Foreign Currency" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("spinbutton", { name: "Amount of Canadian Dollar" })
    ).toHaveValue(1);
    expect(screen.getByRole("img", { name: "calendar" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "" })).toBeInTheDocument();
  });
});
