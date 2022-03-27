import axios, { handleAxiosError, headers } from "../../axios";
import {getSavedUserId} from "../../utils";


const Token = getSavedUserId();

export async function profile(payload) {
  try {
    const response = await axios.get(`users/${Token}/profile`, headers());
    return response.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}