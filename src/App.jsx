import { useContext } from "react";
import "./App.css";
import AddExpense from "./components/AddExpense";
import Expenses from "./components/TransactionList";
import { BudgetContext } from "./context";
import TransactionList from "./components/TransactionList";

function App() {
  const { state } = useContext(BudgetContext);

  return (
    <div className="container">
      <h2>Budget Planner</h2>
      <div className="btns">
        <div className="btn">Budget : 2000</div>
        <div className="btn"> Remaining : {state.remaining}</div>
        <div className="btn">Spant so far : {state.spantsofar} </div>
      </div>
      <TransactionList />
      <AddExpense />
    </div>
  );
}

export default App;
