import axios, { handleAxiosError } from "../../axios";

export async function meals() {
  try {
    const config = {
      url: "meals/",
      method: "GET",
    };
    const response = await axios(config);
    return response.data.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}