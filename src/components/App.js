import React, { Component } from "react";
import TransactionList from "./TransactionList.jsx";
import Add from "./Add.jsx";
import Chart from "./Chart.jsx";

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
    this.state.category = ['Food','Transportation', 'Misc', 'Entertainment'  ]
    this.addTransaction = this.addTransaction.bind(this);
  }

  addTransaction(e) {
    e.preventDefault();
    console.log('at addTransaction')
    const amount = document.getElementById('amount').value;
    const item = document.getElementById('item').value;
    const category = document.getElementById('category').value;
    console.log(  amount,
      item,
      category,)
    const transaction = {
      amount,
      item,
      category,
    };
    const newDataSet = this.state.data.slice();
    newDataSet.push(transaction);
    console.log("CONSOLE", newDataSet)
    this.setState({ 
      data: newDataSet
     });
    console.log(this)
  }

  render() {
    return (
      <div>
        <h1>My Budgetzzz</h1>
        <Add onAdd={this.addTransaction} />
        <TransactionList transactions={this.state.data} />
        <Chart data={this.state.data} />
      </div>
    );
  }
}

export default App;