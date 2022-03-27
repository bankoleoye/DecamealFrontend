import axios, { handleAxiosError } from "../../axios";

export async function tickets() {
  try {
    const config = {
      url: "tickets/",
      method: "GET",
    };
    const response = await axios(config);
    return response.data.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}