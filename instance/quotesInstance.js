import axios from "axios";
const quotesInstance = axios.create({
  baseURL: "https://favqs.com",
});
const api_key = "37017bba672eb45b94132c5e6f1af6e6";

quotesInstance.defaults.headers.common["Authorization"] = `Token ${api_key}`;

export default quotesInstance;
