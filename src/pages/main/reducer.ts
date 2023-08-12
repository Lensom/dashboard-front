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
  },
});

export const {
  openRegistrationModal,
  closeRegistrationModal,
  registrationRequest,
} = mainSlice.actions;

export const { actions, reducer } = mainSlice;
