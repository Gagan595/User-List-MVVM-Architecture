import { createSlice } from '@reduxjs/toolkit';

interface GlobalState {
  isAddUserModalOpen: boolean;
  isEditUserModalOpen: boolean;
  isUserDetailsModalOpen: boolean;
}

const initialState: GlobalState = {
  isAddUserModalOpen: false,
  isEditUserModalOpen: false,
  isUserDetailsModalOpen: false
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
    toggleUserDetailsModal: (state) => {
      state.isUserDetailsModalOpen = !state.isUserDetailsModalOpen;
    },
  },
});

export const { toggleAddUserModal, toggleEditUserModal,toggleUserDetailsModal } = GlobalSlice.actions;
export default GlobalSlice.reducer;