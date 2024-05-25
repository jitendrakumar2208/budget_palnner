import React, { useContext } from "react";
import { BudgetContext } from "../context";

const Transaction = ({ transaction }) => {
  const { state, dispatch } = useContext(BudgetContext);
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      {/*  <span>
        {sign}${Math.abs(transaction.amount)}
      </span> */}
      <p>{transaction.name}</p>
      <button
        onClick={() =>
          dispatch({ type: "DELETE_TRANSACTION", payload: transaction.id })
        }
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
