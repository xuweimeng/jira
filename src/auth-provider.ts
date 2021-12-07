// 操控jwt的token
import { UsersProps } from "screens/data.d";

const apiUrl = process.env.REACT_APP_API_URL;
const localStorageKey = "__auth__provider_token__";

export const getToken = window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: UsersProps }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = (params: { username: string; password: string }) => {
  fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    }
  });
};
export const register = (params: { username: string; password: string }) => {
  fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    }
  });
};

export const logout = () => window.localStorage.removeItem(localStorageKey);
