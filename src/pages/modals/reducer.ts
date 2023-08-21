import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modals: {
    isLoginOpen: false,
    isRegistrationOpen: false,
    isAddStockOpen: false,
    isSidebarOpen: false,
  },
};

export interface IModalsReducer {
  modals: {
    isRegistrationOpen: boolean;
    isLoginOpen: boolean;
    isAddStockOpen: boolean;
    isSidebarOpen: boolean;
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
    openAddStockModal: (state) => {
      state.modals.isAddStockOpen = true;
    },
    closeAddStockModal: (state) => {
      state.modals.isAddStockOpen = false;
    },
    openSidebarkModal: (state) => {
      state.modals.isSidebarOpen = true;
    },
    closeSidebarkModal: (state) => {
      state.modals.isSidebarOpen = false;
    },
  },
});

export const {
  openRegistrationModal,
  closeRegistrationModal,
  openLoginModal,
  closeLoginModal,
  openAddStockModal,
  closeAddStockModal,
  openSidebarkModal,
  closeSidebarkModal,
} = modalsSlice.actions;

export const { actions, reducer } = modalsSlice;
