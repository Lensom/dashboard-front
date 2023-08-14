import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

const initialState: IMainReducer = {
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

const mainSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registrationRequest: (state) => {
      state.user.loading = true;
    },
    registrationSuccess: (state, action: PayloadAction<IUserInfo>) => {
      state.user.isAuth = true;
      state.user.loading = false;
      state.user.info = action.payload;
    },
    registrationError: (state) => {
      state.user.isAuth = false;
      state.user.loading = false;
    },
    fetchUserInfoRequest: (state) => {
      state.user.loading = true;
    },
    fetchUserInfoSuccess: (state, action: PayloadAction<IUserInfo>) => {
      state.user.loading = false;
      state.user.isAuth = true;
      state.user.info = action.payload;
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
    loginSuccess: (state, action: PayloadAction<IUserInfo>) => {
      state.user.isAuth = true;
      state.user.loading = false;
      state.user.info = action.payload;
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

export const { reducer, actions } = mainSlice;
