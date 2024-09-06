// src/redux/slices/userSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface GlobalState {
  isAddUserModalOpen: boolean;
  isEditUserModalOpen: boolean;
}

const initialState: GlobalState = {
  isAddUserModalOpen: false,
  isEditUserModalOpen: false,
};

const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleAddUserModal: (state) => {
      state.isAddUserModalOpen = !state.isAddUserModalOpen;
    },
    toggleEditUserModal: (state) => {
      state.isEditUserModalOpen = !state.isEditUserModalOpen;
    },
  },
});

export const { toggleAddUserModal, toggleEditUserModal } = GlobalSlice.actions;
export default GlobalSlice.reducer;