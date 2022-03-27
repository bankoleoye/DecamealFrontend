import axios, { handleAxiosError } from "../../axios";

export async function login(payload) {
  try {
    const config = {
      url: "auth/login/",
      method: "POST",
      data: payload,
    };
    const response = await axios(config);


    const userResponse = await axios.get("users/",  {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + response.data.data.token,
      },
    });

    return {token: response.data.data.token, user: userResponse.data[0]["id"]};
  } catch (error) {
    throw handleAxiosError(error);
  }
}
