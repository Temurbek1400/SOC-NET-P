import { stopSubmit } from "redux-form";
import { loginAPI } from "../API/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
  // payload
  id: null,
  email: null,
  login: null,
  isAuthorized: false,
  // async animation
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setUserAuthData = (id, email, login, isAuthorized) => ({
  type: SET_AUTH_USER_DATA,
  payload: { id, email, login, isAuthorized },
});

export const authUser = () => async (dispatch) => {
  const res = await loginAPI.authMe();
  if (res) {
    if (res.data.resultCode === 0) {
      console.log("authorized successfully");
      const { email, id, login } = res.data.data;
      dispatch(setUserAuthData(id, email, login, true));
    }
    return await res;
  }
};
export const loginUser = (email, password, rememberMe) => async (dispatch) => {
  const res = await loginAPI.login(email, password, rememberMe); // ? Login
  if (res.data.resultCode === 0) {
    return dispatch(authUser());
  } else {
    let error_message =
      res.data.messages.length > 0 ? res.data.messages[0] : "some error";
    dispatch(stopSubmit("login", { _error: error_message }));
  }
};
export const logoutUser = () => async (dispatch) => {
  const res = await loginAPI.logout(); // ? Logout
  if (res.data.resultCode === 0) {
    dispatch(setUserAuthData(null, null, null, false));
  }
};

export default authReducer;
