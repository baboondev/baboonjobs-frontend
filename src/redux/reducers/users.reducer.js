import { types } from "../types";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  token: "",
  role: "",
  logged: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN:
      return {
        ...state,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        email: action.payload.email,
        token: action.payload.token,
        role: action.payload.role,
        logged: true,
      };
    case types.SIGNUP:
      return {
        ...state,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        email: action.payload.email,
        token: action.payload.token,
        role: action.payload.role,
        logged: true,
      };
    case types.LOGOUT:
      return {
        ...state,
        firstname: "",
        lastname: "",
        email: "",
        token: "",
        role: "",
        logged: false,
      };
    default:
      return state;
  }
};
