import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup,screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ForgotPassword from "../pages/forgotPassword/forgotPassword";
import {BrowserRouter} from 'react-router-dom';



const MockConfirmation = () => {
    return(
        <BrowserRouter>
            <ForgotPassword />
        </BrowserRouter>
    )
}

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MockConfirmation />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders ForgotPassword text", () => {
    render(<MockConfirmation />);
    const ForgotPasswordElement=screen.getByText("ForgotPassword!")
    expect(ForgotPasswordElement).toBeInTheDocument();
  });


test("renders email field", () => {
    render(<MockConfirmation />);
    const emailElement = screen.getByPlaceholderText(/Email/i)
    expect(emailElement).toBeInTheDocument();
});

test("renders email input", () => {
    render(<MockConfirmation />);
    const emailElement = screen.getByPlaceholderText(/Email/i)
    fireEvent.change(emailElement, {target: {name: "king@gmail.com"}})
    expect(emailElement.name).toBe("king@gmail.com");
});


test("renders forgot password", () => {
    render(<MockConfirmation />);
    const RestElement = screen.getByText('ForgotPassword!')
    expect(RestElement).toBeInTheDocument();
})


