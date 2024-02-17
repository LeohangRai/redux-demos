import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { username: '', email: '' };

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: initialStateValue },
  reducers: {
    checkin: (state, action) => {
      state.value = action.payload;
    },
    checkout: (state) => {
      state.value = initialStateValue;
    }
  }
});

export const { checkin, checkout } = userSlice.actions;

export default userSlice.reducer;
