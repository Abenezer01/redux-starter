import { createSlice } from "@reduxjs/toolkit"
let lastId = 1
const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push({
        id: lastId++,
        name: action.payload.name,
      })
    },
  },
})
export const {addUser}=userSlice.actions
export default userSlice.reducer
