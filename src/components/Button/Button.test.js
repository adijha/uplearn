import { render, screen } from "@testing-library/react";
import React from "react";
import Button from "./Button";

describe("Button", () => {
	test("renders Button component", () => {
		render(<Button />);
		screen.debug();

		screen.getByText("Apply");

		expect(screen.getByText("Apply")).toBeInTheDocument();
	});
});
