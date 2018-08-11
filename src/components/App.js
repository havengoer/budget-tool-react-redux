import React, { Component } from "react";

import TransactionList from "./TransactionList.jsx";
import Add from "./Add.jsx";
import Chart from "./Chart.jsx";

var dataSet = [
  {
    amount: -10,
    description: "Chipotle",
    category: "Food"
  },
  {
    amount: 1000,
    description: "Paycheck",
    category: "Food"
  },
  {
    amount: -400.5,
    description: "Gas",
    category: "Transportation"
  },
  {
    amount: -40.5,
    description: "Hair gel",
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

  componentDidMount() {
    this.setState({
      data: dataSet,
      total: dataSet.reduce((a, b) => {
        return a + b.amount;
      }, 0)
    });
  }

  add(description, amount, category) {}

  render() {
    return (
      <div>
        <h1>My Budget</h1>
        <Add onAdd={this.add} />
        <TransactionList transactions={this.state.data} />
        <Chart data={this.state.data} />
      </div>
    );
  }
}

export default App;
