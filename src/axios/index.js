import Axios from "axios";
import { getSavedUserToken } from "../utils";

const token = getSavedUserToken() ? getSavedUserToken() : "";

const axios = Axios.create({
  baseURL: "https://decameal.herokuapp.com/api/v1/",
  headers: {
    Accept: "application/json",
  },
});

export const handleAxiosError = (error) => {
  let errorResponse;
  if (Axios.isAxiosError(error)) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.data) {
        errorResponse = error.response.data || error.response.data;
      }
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
      errorResponse = `Unusual Error: ${error.message}`;
    }
  } else {
    errorResponse = "Something went wrong, please try again.";
  }

  return errorResponse;
};

export const headers = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + token,
    },
  };
};

export default axios;
