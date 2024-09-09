import { increment, decrement, incrementByAmount } from "./counterSlice";

// Example of a thunk action
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const counterActions = { increment, decrement, incrementByAmount };
