import axios from "axios";
import { ToastDangerMessage } from "../utils/toastMessages";

const authClient = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
});

authClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

authClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          ToastDangerMessage(error.response.data.msg);
          break;
        case 401:
          // handle unauthorized error
          break;
        case 404:
          // handle not found error
          break;
        case 500:
          // handle internal server error
          break;
        default:
          // handle other errors
          break;
      }
    } else {
      // handle network error
    }

    return Promise.reject(error);
  }
);

export default authClient;
