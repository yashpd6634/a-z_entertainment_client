export interface UserInput {
  username: string;
  email: string;
  password: string;
  profilePic: string;
  isAdmin: boolean;
}

export interface UserOutput extends UserInput {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  accessToken: string;
}

export const loginStart = () => ({
  type: "LOGIN_START",
});
export const loginSuccess = (user: UserOutput) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});
export const logout = () => ({
  type: "LOGOUT",
});
