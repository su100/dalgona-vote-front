import axios from "axios";

const API_BASE_URL = "http://localhost:8000/rest-auth";

const getToken = () => {
  return window.sessionStorage.getItem("__AUTH__");
};

export const isUserLoggedIn = () => {
  const token = getToken();
  if (token) {
    return true;
  }

  return false;
};

export const signUp = (username, password1, password2, nickname) =>
  axios.post(`${API_BASE_URL}/registration`, {
    username,
    password1,
    password2,
    nickname,
  });

export const signIn = (username, password) =>
  axios.post(`${API_BASE_URL}/login`, {
    username,
    password,
  });
