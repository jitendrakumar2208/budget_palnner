import React, { useContext } from "react";
import { BudgetContext } from "../context";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { state } = useContext(BudgetContext);

  return (
    <div>
      <h3>List</h3>
      <ul className="list">
        {state.items.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
