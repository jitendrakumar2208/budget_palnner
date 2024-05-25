import { createContext, useReducer, useState } from "react";

export const BudgetContext = createContext();
const initialState = {
  budget: 2000,
  remaining: 2000,
  spantsofar: 0,
  items: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        budget: 2000,
        remaining: 2000 - action.payload.price,
        spantsofar: 2000 - state.remaining,
        items: [...state.items, action.payload],
      };
    case "DELETE_TRANSACTION":
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      };
  }
};
export const BudgetContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {props.children}
    </BudgetContext.Provider>
  );
};
