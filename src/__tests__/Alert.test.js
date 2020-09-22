import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

test("displays an error message", () => {
  const { getByText } = render(
    <Alert message="Something went wrong! Your event was not created. Please try again." />
  );

  expect(
    getByText(
      /Something went wrong! Your event was not created. Please try again./
    ).textContent
  ).toBe("Something went wrong! Your event was not created. Please try again.");
});

test("displays a success message", () => {
  const { getByText } = render(
    <Alert message="Your event was created!" success />
  );

  expect(getByText(/Your event was created/).textContent).toBe(
    "Your event was created!"
  );
});
