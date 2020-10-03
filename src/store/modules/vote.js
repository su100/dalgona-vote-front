import { createAction, handleActions } from "redux-actions";
import { Map, List } from "immutable";
import { pender } from "redux-pender";

import * as api from "lib/api";

/* 액션 타입 */
export const LIST_VOTE_BOARD = "vote/LIST_VOTE_BOARD"; //투표리스트 가져오기
export const VIEW_HOT_BOARD = "vote/VIEW_HOT_BOARD"; //now hot 투표 가져오기
export const POST_VOTE_BOARD = "vote/POST_VOTE_BOARD"; //투표 등록하기
export const UPDATE_VOTE_BOARD = "vote/UPDATE_VOTE_BOARD"; //투표 정보 수정하기
export const DELETE_VOTE_BOARD = "vote/DELETE_VOTE_BOARD"; //투표 삭제하기
export const POST_VOTE_CONTENTS = "vote/POST_VOTE_CONTENTS"; //투표 내용 등록하기
export const POST_VOTE = "vote/POST_VOTE"; //투표하기
export const CANCEL_VOTE = "vote/CANCEL_VOTE"; //투표하기

/* 액션 생성자 */
export const getVoteList = createAction(LIST_VOTE_BOARD, api.getVoteList);
export const getHotBoard = createAction(VIEW_HOT_BOARD, api.getHotBoard);
export const postVoteBoard = createAction(POST_VOTE_BOARD, api.postVoteBoard);
export const deleteVoteBoard = createAction(
  DELETE_VOTE_BOARD,
  api.deleteVoteBoard
);
export const postVoteContents = createAction(
  POST_VOTE_CONTENTS,
  api.postVoteContents
);
export const postVote = createAction(POST_VOTE, api.postVote);
export const cancelVote = createAction(CANCEL_VOTE, api.postVote);
export const updateVoteBoard = createAction(
  UPDATE_VOTE_BOARD,
  api.updateVoteBoard
);

/* 초기 상태 정의 */
const initialState = Map({
  votelist: List([]),
  nowhot: {},
});

/* reducer + pender */
export default handleActions(
  {
    ...pender({
      type: LIST_VOTE_BOARD,
      onSuccess: (state, action) => {
        const results = action.payload.data;
        let list = List([]);
        for (let i = 0; i < results.length; i++) {
          list = list.push(Map(results[i]));
        }
        return state.set("votelist", list);
      },
      onFailure: (state, action) => {
        alert(action.payload.data);
        return state;
      },
    }),
    ...pender({
      type: VIEW_HOT_BOARD,
      onSuccess: (state, action) => {
        return state.set("nowhot", action.payload.data);
      },
      onFailure: (state, action) => {
        alert(action.payload.data);
        return state;
      },
    }),
    ...pender({
      type: POST_VOTE_BOARD,
      onSuccess: (state, action) => {
        alert("투표가 추가되었습니다");
        console.log(action);
        return state;
      },
      onFailure: (state, action) => {
        alert(action.payload.data);
        return state;
      },
    }),
    ...pender({
      type: UPDATE_VOTE_BOARD,
      onSuccess: (state, action) => {
        alert("투표 정보가 수정되었습니다");
        return state;
      },
      onFailure: (state, action) => {
        alert(action.payload.data);
        return state;
      },
    }),
    ...pender({
      type: DELETE_VOTE_BOARD,
      onSuccess: (state, action) => {
        alert("투표가 삭제되었습니다");
        return state;
      },
      onFailure: (state, action) => {
        alert(action.payload.data);
        return state;
      },
    }),
    ...pender({
      type: POST_VOTE_CONTENTS,
      onSuccess: (state, action) => {
        alert("항목이 추가되었습니다");
        console.log(action);
        return state;
      },
      onFailure: (state, action) => {
        alert(action.payload.data);
        return state;
      },
    }),
    ...pender({
      type: POST_VOTE,
      onSuccess: (state, action) => {
        alert("투표가 반영되었습니다");
        console.log(action);
        return state;
      },
      onFailure: (state, action) => {
        alert(action.payload.data);
        return state;
      },
    }),
    ...pender({
      type: CANCEL_VOTE,
      onSuccess: (state, action) => {
        alert("투표가 취소되었습니다");
        console.log(action);
        return state;
      },
      onFailure: (state, action) => {
        alert(action.payload.data);
        return state;
      },
    }),
  },
  initialState
);
