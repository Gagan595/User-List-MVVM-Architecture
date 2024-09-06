import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { User } from '../../types/users';

interface UserState {
  users: User[];
  selectUserId: number | null;
}

const initialState: UserState = {
  users: [], 
  selectUserId: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    selectUserById(state, action: PayloadAction<number>) {
      state.selectUserId = action.payload;
    },
    addUser(state, action: PayloadAction<User>) {
        state.users.push(action.payload); // Add the new user to the users array
      },
    updateUser(state, action: PayloadAction<User>) {
        const updatedUser = action.payload;
        const index = state.users.findIndex(user => user.id === updatedUser.id);
        if (index !== -1) {
          state.users[index] = updatedUser;
        }
      },
  },
});

export const { setUsers, selectUserById, updateUser ,addUser} = userSlice.actions;

export default userSlice.reducer;
