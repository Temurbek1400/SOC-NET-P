import { usersAPI } from "../API/api";

const GET_FOLLOWED_USERS = "GET_FOLLOWED_USERS";

const initialState = {
  followedUsers: [],
}


const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOLLOWED_USERS:
      return {...state, followedUsers: [...action.followedUsers]}
    default:
      return state;
  }
}
export const setFollowedUsers = (followedUsers) => ({type: GET_FOLLOWED_USERS, followedUsers})

export const requestFollowedUsers = () => async (dispatch) => {
  const res = await usersAPI.getFollowedUsers();
  dispatch(setFollowedUsers(res.items))
};

export default sidebarReducer;

