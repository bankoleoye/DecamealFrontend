import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TopHero from "../components/topHero";

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TopHero />, div);
});

it("renders with displaying", () => {
  render(<TopHero Text1="Read" />);
  const textOneElement = screen.getByText("Read");
  expect(textOneElement).toBeInTheDocument();
});

it("renders with displaying code", () => {
  render(<TopHero Text2="Code" />);
  const textTwoElement = screen.getByText("Code");
  expect(textTwoElement).toBeInTheDocument();
});

it("renders with displaying Water", () => {
  render(<TopHero Text3="Water" />);
  const textThreeElement = screen.getByText("Water");
  expect(textThreeElement).toBeInTheDocument();
});

it("renders with displaying", () => {
  render(<TopHero Text4="Food" />);
  const textFourElement = screen.getByText("Food");
  expect(textFourElement).toBeInTheDocument;
});
