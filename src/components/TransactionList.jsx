import React from "react";
import TransactionListEntry from "./TransactionListEntry.jsx";

const TransactionList = props => {
  const transactions = props.transactions.map((transaction, index) => (
    <TransactionListEntry transaction={transaction} key={index} />
  ));

  return (
    <div className="divStyle">
      <h1>Transaction List</h1>
      <div className="divTable blueTable">
        <div className="divTableHeading">
          <div className="divTableRow">
            <div className="divTableHead">Amount</div>
            <div className="divTableHead">Item</div>
            <div className="divTableHead">Category</div>
          </div>
        </div>
        <div className="divTableBody">{transactions}</div>
      </div>
    </div>
  );
};

export default TransactionList;
