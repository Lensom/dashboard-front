import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modals: {
    isRegistrationOpen: false,
  },
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
  modals: {
    isRegistrationOpen: boolean;
  };
  user: {
    isAuth: boolean;
    loading: boolean;
    info: IUserInfo;
  };
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    openRegistrationModal: (state) => {
      state.modals.isRegistrationOpen = true;
    },
    closeRegistrationModal: (state) => {
      state.modals.isRegistrationOpen = false;
    },
    registrationRequest: (state) => {
      state.user.isAuth = false;
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
  },
});

export const {
  openRegistrationModal,
  closeRegistrationModal,
  registrationRequest,
  fetchUserInfoRequest,
  userLogout,
} = mainSlice.actions;

export const { actions, reducer } = mainSlice;
