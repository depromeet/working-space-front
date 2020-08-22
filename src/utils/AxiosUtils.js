import axios from "axios";

export const AxiosUtils = axios.create({
  baseURL: "https://nomad-cafe.yonghochoi.com/api/v1",
});

export function createCancelSource() {
  return axios.CancelToken.source();
}
