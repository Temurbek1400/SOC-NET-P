import { profileAPI } from "../API/api";

const ADD_POST = "ADD_POST";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SET_PROFILE_PHOTO = "SET_PROFILE_PHOTO";

let initialState = {
  postsData: [
    // { id: 1, postMessage: "I am in the beach", likesCount: 452 },
    // { id: 2, postMessage: "I am in the city", likesCount: 442 },
    // { id: 3, postMessage: "I am in the russia", likesCount: 422 },
    // { id: 4, postMessage: "I am in the uzb", likesCount: 402 },
    // { id: 5, postMessage: "I am in the home", likesCount: 423 },
    // { id: 6, postMessage: "I am in the roof", likesCount: 42 },
  ],
  isFetching: false,
  profile: null,
  userStatus: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.postsData.length + 1,
        postMessage: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        userStatus: action.userStatus,
      };
    case SET_PROFILE_PHOTO:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      };
    default:
      return state;
  }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const setUserStatus = (userStatus) => ({
  type: SET_USER_STATUS,
  userStatus,
});
export const setProfilePhotoSuccess = (photos) => ({
  type: SET_PROFILE_PHOTO,
  photos,
});

export const getUserProfileFromRouter = (userId) => async (dispatch) => {
  const res = await profileAPI.getUserProfile(userId);
  await dispatch(setUserProfile(res));
};
export const getUserStatus = (userId) => async (dispatch) => {
  const res = await profileAPI.getUserStatus(userId);
  await dispatch(setUserStatus(res.data));
};
export const updateUserStatus = (userStatus) => async (dispatch) => {
  const res = await profileAPI.updateUserStatus(userStatus);
  if (res.data.resultCode === 0) {
    dispatch(setUserStatus(userStatus));
  }
};
export const setProfilePhoto = (photoFile) => async (dispatch) => {
  await profileAPI.setProfilePhoto(photoFile).then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setProfilePhotoSuccess(res.data.data.photos));
    }
  })
};

export default profileReducer;
