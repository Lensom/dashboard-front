import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modals: {
    isLoginOpen: false,
    isRegistrationOpen: false,
  },
};

export interface IModalsReducer {
  modals: {
    isRegistrationOpen: boolean;
    isLoginOpen: boolean;
  };
}

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openRegistrationModal: (state) => {
      state.modals.isRegistrationOpen = true;
    },
    closeRegistrationModal: (state) => {
      state.modals.isRegistrationOpen = false;
    },
    openLoginModal: (state) => {
      state.modals.isLoginOpen = true;
    },
    closeLoginModal: (state) => {
      state.modals.isLoginOpen = false;
    },
  },
});

export const {
  openRegistrationModal,
  closeRegistrationModal,
  openLoginModal,
  closeLoginModal,
} = modalsSlice.actions;

export const { actions, reducer } = modalsSlice;
