import { createAction, handleActions } from "redux-actions";
import { Map } from "immutable";
import { pender } from "redux-pender";

import * as api from "lib/api";

/* 액션 타입 */
export const SIGN_UP = "auth/SIGN_UP"; //회원가입
export const SIGN_IN = "auth/SIGN_IN"; //로그인
export const SIGN_OUT = "auth/SIGN_OUT"; //로그아웃
export const SET_AUTH = "auth/SET_AUTH"; //로그인여부
export const DELETE_USER = "auth/DELETE_USER"; //로그인여부

/* 액션 생성자 */
export const signUp = createAction(SIGN_UP, api.signUp);
export const signIn = createAction(SIGN_IN, api.signIn);
export const signOut = createAction(SIGN_OUT);
export const setAuth = createAction(SET_AUTH);
export const deleteUser = createAction(DELETE_USER, api.deleteUser);

/* 초기 상태 정의 */
const initialState = Map({
  isAuthenticated: false,
  isAdmin: false,
});

/* reducer + pender */
export default handleActions(
  {
    [SIGN_OUT]: (state, action) => {
      window.sessionStorage.removeItem("__AUTH__");
      window.sessionStorage.removeItem("__ADMIN__");
      return state.set("isAuthenticated", false).set("isAdmin", false);
    },
    [SET_AUTH]: (state, action) => {
      if (api.isUserLoggedIn()) {
        //로그인, 관리자 여부 store에 재저장
        const isAdmin = window.sessionStorage.getItem("__ADMIN__");
        if (isAdmin === "true") {
          return state.set("isAuthenticated", true).set("isAdmin", true);
        } else {
          return state.set("isAuthenticated", true).set("isAdmin", false);
        }
      }
      return state;
    },
    ...pender({
      type: SIGN_UP,
      onSuccess: (state, action) => {
        //access token 저장
        window.sessionStorage.setItem("__AUTH__", action.payload.data.token);
        //회원가입 성공 알림
        alert(`${action.payload.data.user.nickname}님 가입을 환영합니다!`);
        return state.set("isAuthenticated", true);
      },
      onFailure: (state, action) => {
        const data = action.payload.response.data;
        if (data.username) {
          if (
            data.username.includes("A user with that username already exists.")
          )
            alert("이미 존재하는 아이디입니다.");
          else alert(data.username);
        }
        if (data.nickname) {
          if (data.nickname.includes("This field must be unique."))
            alert("이미 존재하는 이름입니다.");
          else alert(data.username);
        }
        if (data.password1) {
          if (data.password1.includes("This password is too common."))
            alert("보안에 취약한 비밀번호입니다.");
          else alert(data.password1);
        }
        return state;
      },
    }),
    ...pender({
      type: SIGN_IN,
      onSuccess: (state, action) => {
        //access token 저장
        const isAdmin = action.payload.data.superuser;
        window.sessionStorage.setItem("__ADMIN__", isAdmin);
        window.sessionStorage.setItem("__AUTH__", action.payload.data.token);
        if (isAdmin) {
          return state.set("isAuthenticated", true).set("isAdmin", true);
        } else {
          return state.set("isAuthenticated", true).set("isAdmin", false);
        }
      },
      onFailure: (state, action) => {
        const data = action.payload.response.data;
        if (data.non_field_errors) {
          if (
            data.non_field_errors.includes(
              "Unable to log in with provided credentials."
            )
          )
            alert("가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.");
          if (
            data.non_field_errors.includes(
              'Must include "username" and "password".'
            )
          )
            alert("항목을 모두 입력해주세요");
          if (data.non_field_errors.includes("User account is disabled."))
            alert("비활성화된 계정입니다.");
        }
        if (data.password)
          if (data.password.includes("This field is required."))
            alert("비밀번호를 입력해주세요");
        return state;
      },
    }),
    ...pender({
      type: DELETE_USER,
      onSuccess: (state, action) => {
        //access token 저장
        window.sessionStorage.removeItem("__AUTH__");
        alert("회원 탈퇴 되었습니다");
        return state.set("isAuthenticated", false);
      },
      onFailure: (state, action) => {
        alert(action.payload.data);
        return state;
      },
    }),
  },
  initialState
);
