import { createSlice } from "@reduxjs/toolkit";
let lastId=1
const projectSlice=createSlice({
    name:'project',
    initialState:[],
    reducers:{
        projectAdded:(state,action)=>{
            state.push({
                id:lastId++,
                name:action.payload.name
            })
        }
    }
})
export const {projectAdded}=projectSlice.actions
export default projectSlice.reducer