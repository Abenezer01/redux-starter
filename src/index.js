import configureStore from "./store/configureStore";

import {
  bugAdded,
  bugAssign,
  bugResolved,
  getAssignedBugs,
} from "./store/bugsSlice";
import { projectAdded } from "./store/projectSlice";
import { getUnresolvedBugs } from "./store/bugsSlice";
import { addUser } from "./store/userSlice";
const store = configureStore();
// store.subscribe(()=>{
//     console.log('state changed',store.getState())
// })

// store.dispatch(bugAdded({description:'Bug 1'} ))
// store.dispatch(bugAdded({description:'Bug 2'} ))
// store.dispatch(bugAdded({description:'Bug 3'} ))
// store.dispatch(bugResolved({id:1}))

// store.dispatch(addUser({name:'Abenezer'}))
// store.dispatch(bugAssign({user_id:1,id:1}))
// console.log('unresolvedBugs',getUnresolvedBugs(store.getState()))
// console.log('get assigned bugs',getAssignedBugs(store.getState(),1))
// store.dispatch(projectAdded({name:'Project 1'}))
// console.log(projectAdded(10))
// store.dispatch({type:'bugsReceived',bugs:[1,2,2]})

// store.dispatch((dispatch,getState)=>{
//   dispatch({type:'bugsReceived',bugs:[1,2,2]})
//   console.log('getState',getState())
// })
// store.dispatch(
//     {
//         type:'error',
//         payload: {message:'an error occured'}
//     }
// )

store.dispatch({
  type: "apiCallBegan",
  payload: {
    url: "bugs",
    // method: "get",
    // data: {},
    onSuccess: "bugReceived",
    onError: "apiRequestFailed",
  },
});
