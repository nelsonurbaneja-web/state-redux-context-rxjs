import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: '',
  email: ''
}

export const userSlice = createSlice({
  name: "user",
  initialState : INITIAL_STATE,
  reducers: {
    createUser(_, action) {
      return action.payload
    },
    
    modifyUser(state, action) {
      return {
        ...state,
        ...action.payload
      }
    }
  }
})

export const { createUser,  modifyUser } = userSlice.actions
export default userSlice.reducer
