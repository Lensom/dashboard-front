import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    isAuth: false,
    loading: false,
    info: {
      email: '',
      username: '',
      _id: '',
      token: '',
    },
  },
};

export interface IUserInfo {
  email: string;
  username: string;
  _id: string;
  token: string;
}

export interface IMainReducer {
  user: {
    isAuth: boolean;
    loading: boolean;
    info: IUserInfo;
  };
}

const mainSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registrationRequest: (state) => {
      state.user.loading = true;
    },
    registrationSuccess: (state, { payload }) => {
      state.user.isAuth = true;
      state.user.loading = false;
      state.user.info = payload;
    },
    registrationError: (state) => {
      state.user.isAuth = false;
      state.user.loading = false;
    },
    fetchUserInfoRequest: (state) => {
      state.user.loading = true;
    },
    fetchUserInfoSuccess: (state, { payload }) => {
      state.user.loading = false;
      state.user.isAuth = true;
      state.user.info = payload;
    },
    fetchUserInfoError: (state) => {
      state.user.isAuth = false;
      state.user.loading = false;
      state.user.info = initialState.user.info;
    },
    userLogout: (state) => {
      state.user.isAuth = false;
      state.user.loading = false;
      state.user.info = initialState.user.info;
    },
    loginRequest: (state) => {
      state.user.loading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.user.isAuth = true;
      state.user.loading = false;
      state.user.info = payload;
    },
    loginError: (state) => {
      state.user.isAuth = false;
      state.user.loading = false;
    },
  },
});

export const {
  registrationRequest,
  fetchUserInfoRequest,
  loginRequest,
  userLogout,
} = mainSlice.actions;

export const { actions, reducer } = mainSlice;
