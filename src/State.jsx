import { createContext } from "react";

export const initialState = [];

export const ExpenseContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case "Add_EXPENSE":
      return {
        ...state,
        remaining: 2000 - action.payload.price,
        spantsofar: spantsofar + action.payload.price,
        expenseName: action.payload.name,
        expensePrice: action.payload.price,
      };

    default:
      return state;
  }
};
