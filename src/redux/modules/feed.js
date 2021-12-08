// *** 패키지 import

import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// *** 액션 타입
const GET_FEED = "GET_FEED";

// *** 액션 생성 함수
const getFeed = createAction(GET_FEED, (myContens, myPosts) => ({
  myContens,
  myPosts,
}));

// *** 초기값
const initialState = {
  myPosts: [],
  myComments: [],
};

// *** 미들웨어
const getFeedFB = () => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("user_token");

    axios
      .get("http://3.37.36.119/api/feeds", {
        headers: { Authorization: token },
      })
      .then((response) => {
        console.log("피드 정보 가져오기 성공");

        const myContens = response.data.myComments;
        const myPosts = response.data.myPosts;
        dispatch(getFeed(myContens, myPosts));
      })
      .catch((err) => {
        console.log("피드 정보 가져오기 실패", err);
      });
  };
};

// *** 리듀서
export default handleActions(
  {
    [GET_FEED]: (state, action) => {
      produce(state, (draft) => {
        draft.myPosts = [...action.payload.myPosts]
        draft.myComments = [...action.payload.myContens]
      });
    },
  },
  initialState
);

// *** 액션 생성 함수 export
const actionCreators = {
  getFeedFB,
};

export { actionCreators };
