import axios from "axios";

const makeHttpClient = (
  baseUrl: string,
  customHeaders: Record<string, string> = {}
) => {
  return axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
      ...customHeaders,
    },
  });
};

export const makeMainApiHttpClient = (
  customHeaders: Record<string, string> = {}
) => {
  const baseUrl = import.meta.env.VITE_MAIN_API_URL;
  return makeHttpClient(baseUrl, customHeaders);
};

export const makeBeehivApiHttpClient = (
  customHeaders: Record<string, string> = {}
) => {
  const baseUrl = import.meta.env.VITE_BEEHIV_API_URL;
  return makeHttpClient(baseUrl, customHeaders);
};
