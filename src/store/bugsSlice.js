import { createAction, createReducer, createSlice } from "@reduxjs/toolkit"

//reducers
let lastId = 1
const slice=createSlice({name:'bugs',initialState:[],reducers: {
  // key:value
  bugAdded: (bugs, action) => {
    bugs.push({
      id: lastId++,
      description: action.payload.description,
      resolved: false,
    })
  },
  bugRemoved: (bugs, action) => {
    let index = bugs.findIndex((bug) => bug.id === action.payload.id)
    delete bugs[index]
  },
  bugResolved: (bugs, action) => {
    let index = bugs.findIndex((bug) => bug.id === action.payload.id)
    bugs[index].resolved = true
  },
  bugAssign:(bugs,action)=>{
    let index= bugs.findIndex(bug=>bug.id===action.payload.id)
    bugs[index].user_id=action.payload.user_id
  }
}})
export const {bugAdded,bugRemoved,bugResolved,bugAssign}=slice.actions
export default slice.reducer
export const getUnresolvedBugs=state=>state.bugs.filter(bug=>bug.resolved===false)
export const getAssignedBugs=(state,user_id)=>state.bugs.filter(bug=>bug.user_id===user_id)
// //action creators (actions)
// export const bugAdded = createAction("bugAdded")
// export const bugRemoved = createAction("bugRemoved")
// export const bugResolved = createAction("bugResolved")
// let lastId = 1
// const reducer=createReducer([], {
//   // key:value
//   [bugAdded.type]: (bugs, action) => {
//     bugs.push({
//       id: lastId++,
//       description: action.payload.description,
//       resolved: false,
//     })
//   },
//   [[bugRemoved.type]]: (bugs, action) => {
//     let index = bugs.findIndex((bug) => bug.id === action.payload.id)
//     bugs[index].resolved = true
//   },
// })

// export default reducer
