import axios from "axios";

export const ApiService = {
  async getStatus() {
    return axios.get(`${process.env.VUE_APP_BASE_API_URL}status/`);
  },
};
