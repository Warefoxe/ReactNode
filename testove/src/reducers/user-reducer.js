import * as axios from "axios";

const GET_USER = "GET_USER";
const GET_USERS = "GET_USERS";

let initialState = {
  user: null,
  users: [],
  error: {},
};

const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export const setUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

export const setUser = (user) => {
  return {
    type: GET_USER,
    user,
  };
};

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/users");
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      // type:USER_ERROR,
      // payload:{msg:err.response.statusText,status: err.response.status}
    });
  }
};

export default usersReducer;
