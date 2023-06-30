// fetch data and send data to server and modify data
import axios from "axios";
const BASE_URL = "https://newsapi.org/v2/everything";
const options = {
  method: "GET",
  headers: {
    "x-api-key": "000c8eb3d797462f8bbaf8e95d3e459b",
  },
};
export const FetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}?q=${url}`, options);
  return data;
};
