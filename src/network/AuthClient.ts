import axios from "axios";
import {
  initialAuthState,
  setAuthentication,
} from "../../store/slices/authSlice";
import { store } from "../../store/store";
import {
  ApiConstant,
  ApplicationConstant,
} from "../constant/applicationConstant";
import { ToastDangerMessage, ToastWarnMessage } from "../utils/toastMessages";

const authClient = axios.create({
  baseURL: ApiConstant.AUTH_API_PATH,
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
      ToastWarnMessage(
        "Server not responding, please try again after some time!!"
      );
    }

    return Promise.reject(error);
  }
);

export const initializeAuthData = async () => {
  const refreshToken = localStorage.getItem(ApplicationConstant.REFRESH_TOKEN);
  if (!refreshToken) {
    store.dispatch(setAuthentication(initialAuthState));
    return false;
  }
  try {
    const authResponse = await authClient.get("/get-access-token", {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    store.dispatch(
      setAuthentication({
        accessToken: authResponse.data.accessToken,
        refreshToken: refreshToken,
        user: authResponse.data.user,
        isAuthenticated: true,
      })
    );
    return true;
  } catch {
    localStorage.clear();
    sessionStorage.clear();
    store.dispatch(setAuthentication(initialAuthState));
    return false;
  }
};

export default authClient;
