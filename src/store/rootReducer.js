import { combineReducers } from "redux";
import projectSlice from './projectSlice'
import bugSlice from './bugsSlice'
import userSlice from './userSlice'
const rootReducer=combineReducers({
    projects:projectSlice,
    bugs:bugSlice,
    users:userSlice
})
export default rootReducer