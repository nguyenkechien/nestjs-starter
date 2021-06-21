import counter, { CounterState } from './../modules/counter';
// import { combineReducers, AnyAction } from '@reduxjs/toolkit';
// import { HYDRATE } from 'next-redux-wrapper';

// export interface State {
//   counter: CounterState;
// }

// const rootReducer = (state: State | undefined, action: AnyAction) => {
//   switch (action.type) {
//     case HYDRATE:
//       console.log('HYDRATE');
//       return action.payload;

//     default: {
//       const combineReducer = combineReducers({
//         counter,
//       });
//       return combineReducer(state, action);
//     }
//   }
// };
// export const reducer = rootReducer;

export const reducer = {
  counter,
};
