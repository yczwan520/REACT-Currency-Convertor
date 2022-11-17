import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import GoBack from "../Goback";
import "@testing-library/jest-dom";

describe("GoBack page", () => {
  const pageInfo =
    "This is the best currency convertor in the world! Convert foreign dollars to Canadian dollar";
  it("renders the GoBack page", () => {
    const { container } = render(
      <MemoryRouter>
        <GoBack />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText(pageInfo)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Go Back" })).toBeInTheDocument();
  });
});
