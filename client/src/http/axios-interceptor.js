import axios from "axios";

export default function setup() {
  axios.interceptors.request.use(
    (config) => {
      if (!config || !config.url) {
        return {};
      }

      const baseUrl = process.env.VUE_APP_BASE_API_URL;
      if (config.url.substring(0, baseUrl.length) !== baseUrl) {
        return config;
      }
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (!error || !error.response || error.response.status === 401) {
        return Promise.reject(error.response);
      }

      return Promise.reject(error.response);
    }
  );
}
