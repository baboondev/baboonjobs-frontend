import { UserService } from "../../services/users.service";
import { types } from "../types";

export const signInThunk = (email, password) => {
  return async (dispatch) => {
    const credentials = await UserService.signIn(email, password);
    console.log(credentials);
    dispatch(signIn(credentials));
  };
};

export const signUpThunk = (user) => {
  return async (dispatch) => {
    const credentials = await UserService.signUp(user);
    dispatch(signUp(credentials));
  };
};

export const signIn = (credentials) => ({
  type: types.SIGNIN,
  payload: credentials,
});

export const signUp = (credentials) => ({
  type: types.SIGNUP,
  payload: credentials,
});

export const logout = () => ({
  type: types.LOGOUT,
});
