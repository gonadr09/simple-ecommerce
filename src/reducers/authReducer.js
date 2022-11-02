export const initialAuthReducer = () => {
  return JSON.parse(localStorage.getItem("auth")) || initialState
}

export const initialState = {
  username: null,
  token: null,
  isAuth: false,
};

export const TYPES = {
  LOGIN: "[auth]LOGIN",
  LOGOUT: "[auth]LOGOUT",
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return {
        ...state,
        username: action.payload.user,
        token: action.payload.token,
        isAuth: true,
      };
    case TYPES.LOGOUT:
      return {
        username: null,
        token: null,
        isAuth: false,
      };
    default:
      return state;
  }
};
