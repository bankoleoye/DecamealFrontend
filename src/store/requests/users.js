import axios, { handleAxiosError, headers } from "../../axios";

export async function getUsers() {
  try {
    const response = await axios.get("users/", headers());
    return response.data;
  } catch (error) {
    throw Error(handleAxiosError(error));
  }
}



