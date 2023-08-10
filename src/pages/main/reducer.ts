import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modals: {
    isRegistrationOpen: false,
  },
  user: {
    isAuth: false,
    loading: false,
  },
};

export interface IMainReducer {
  modals: {
    isRegistrationOpen: boolean;
  };
  user: {
    isAuth: boolean;
    loading: boolean;
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
    registrationSuccess: (state) => {
      state.user.isAuth = true;
      state.user.loading = false;
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
