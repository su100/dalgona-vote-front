import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

/* Auth */
const getToken = () => {
  return window.sessionStorage.getItem("__AUTH__");
};

const getAccesesToken = () => {
  if (getToken()) return "jwt " + getToken();
};

export const isUserLoggedIn = () => {
  const token = getToken();
  if (token) {
    return true;
  }

  return false;
};

export const signUp = (username, password1, password2, nickname) =>
  axios.post(`${API_BASE_URL}/rest-auth/registration`, {
    username,
    password1,
    password2,
    nickname,
  });

export const signIn = (username, password) =>
  axios.post(`${API_BASE_URL}/rest-auth/login`, {
    username,
    password,
  });

export const deleteUser = () =>
  axios.delete(`${API_BASE_URL}/accounts/user`, {
    headers: { Authorization: getAccesesToken() },
  });

/* Vote */
export const getVoteList = (ended, voted) =>
  axios.get(`${API_BASE_URL}/board`, {
    params: { ended, voted },
    headers: { Authorization: getAccesesToken() },
  });

export const getHotBoard = () =>
  axios.get(`${API_BASE_URL}/hotboard`, {
    headers: { Authorization: getAccesesToken() },
  });

export const postVoteBoard = (title, ended = false) =>
  axios.post(
    `${API_BASE_URL}/board`,
    {
      title,
      ended,
    },
    {
      headers: { Authorization: getAccesesToken() },
    }
  );

export const deleteVoteBoard = (boardId) =>
  axios.delete(`${API_BASE_URL}/board/${boardId}`, {
    headers: { Authorization: getAccesesToken() },
  });

export const postVoteContents = (formdata) =>
  axios.post(`${API_BASE_URL}/voteboard`, formdata, {
    headers: { Authorization: getAccesesToken() },
  });

export const postVote = (contentsId) =>
  axios.post(
    `${API_BASE_URL}/voteboard/${contentsId}`,
    {},
    {
      headers: { Authorization: getAccesesToken() },
    }
  );

export const updateVoteBoard = (boardId, title, ended) =>
  axios.put(
    `${API_BASE_URL}/board/${boardId}`,
    { title, ended },
    {
      headers: { Authorization: getAccesesToken() },
    }
  );
