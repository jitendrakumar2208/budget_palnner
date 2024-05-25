import React, { useContext, useState } from "react";
import { BudgetContext } from "../context";

const AddExpense = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const { state, dispatch } = useContext(BudgetContext);
  const handleClick = () => {
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      price: price,
      name: name,
    };
    dispatch({ type: "ADD", payload: newTransaction });
  };
  return (
    <div>
      <h2>Add Expense</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p>Name</p>
          <input
            type="text"
            style={{ width: "500px", padding: "10px 17px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <p>Cost</p>
          <input
            type="number"
            name=""
            id=""
            style={{ width: "500px", padding: "10px 17px" }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <button
        style={{
          marginTop: "30px",
          padding: "10px 14px",
          background: "blue",
          color: "white",
          borderRadius: " 7px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        Save
      </button>
    </div>
  );
};

export default AddExpense;
