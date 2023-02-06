import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const appClient = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
});

appClient.interceptors.request.use(
  (config) => {
    const authStore = useSelector((state: RootState) => state.authReducer);
    config.headers["Authorization"] = `Bearer ${authStore.accessToken}`;
    return config;
  },
  (error) => Promise.reject(error)
);

appClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
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

export default appClient;
