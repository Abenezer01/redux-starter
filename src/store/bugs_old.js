import { createAction, createReducer } from "@reduxjs/toolkit"

//action creators (actions)
export const bugAdded=createAction('bugAdded')
export const bugRemoved=createAction('bugRemoved')
export const bugResolved=createAction('bugResolved')


//reducers 
let lastId = 1;

const reducer = (state = [], action) => {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
          id: lastId ++,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case bugRemoved.type:
      return state.filter((bug) => bug.id != action.payload.id);
    case bugResolved.type:
      return state.map((bug) =>
        bug.id === action.payload.id
          ? {
              ...bug,
              resolved: true,
            }
          : bug
      );
    default:
      return state;
  }
};
export default reducer;
