import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Testimonial from "../components/testimonial/testimonial";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const initialState = { users: { data: [] } };
const mockStore = configureStore();
let store = mockStore(initialState);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Testimonial />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
