import reducer from './store/reducer'
const createStore=reducer=>{
    let state;
    let listeners=[]
    const getState=()=>{
        return state
    }
    let subscribe=(listener)=>{
        listeners.push(listener)
    }
    const dispatch=action=>{
       state= reducer(state,action)
       listeners.forEach(listener => {
            listener()
       });
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}
export default createStore(reducer)