import React, { Component } from "react";
import TransactionList from "./TransactionList.jsx";
import Add from "./Add.jsx";

const dataSet = [
  {
    amount: -10,
    item: "Chipotle",
    category: "Food"
  },
  {
    amount: 1000,
    item: "Paycheck",
    category: "Food"
  },
  {
    amount: -400.5,
    item: "Gas",
    category: "Transportation"
  },
  {
    amount: -40.5,
    item: "Hair gel",
    category: "Misc"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.data = dataSet;
    this.state.total = 0;
  }

  addTransaction(value) {
    const amount = document.getElementById('amount');
    const item = document.getElementById('item');
    const category = document.getElementById('category');
    const transaction = {
      amount,
      item,
      category,
    };
    const copy = this.state.data.slice();
    copy.push(transaction);
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <h1>My Budget</h1>
        <Add onAdd={this.add} />
        <TransactionList transactions={this.state.data} />
        {/* <Chart data={this.state.data} /> */}
      </div>
    );
  }
}

export default App;