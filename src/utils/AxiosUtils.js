import axios from "axios";

const AxiosUtils = axios.create({
  baseURL: "https://nomad-cafe.yonghochoi.com/api/v1",
});

export default AxiosUtils;
