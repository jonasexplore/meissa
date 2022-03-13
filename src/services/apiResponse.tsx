import { AxiosResponse } from "axios";

const apiResponse = (response: AxiosResponse) => {
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return response.data;
};

export { apiResponse };
