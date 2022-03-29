import { authUser } from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return { ...state, initialized: action.initialized };

    default:
      return state;
  }
};

export const initialedSuccess = (initialized) => ({
  type: SET_INITIALIZED,
  initialized,
});

export const initializeApp = () => async (dispatch) => {
  await dispatch(authUser());
  await dispatch(initialedSuccess(true));
};

export default appReducer;
