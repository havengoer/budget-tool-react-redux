import {hot} from "react-hot-loader";
import Menu from './Menu'

import { BrowserRouter as Router, Route, hashHistory, Link } from "react-router-dom";

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
        {/* <Add onAdd={this.addTransaction} />
        <TransactionList transactions={this.state.data} />
        <Chart data={this.state.data} /> */}
    
    <div className="appHouse">
    <Router history={hashHistory}>
      <div>
        <div className="Logo">
        <h1>Budget</h1>

          <div className="navBar">
          <ul>
            <li><Link to='/chart'>Dashboard</Link></li>
            <li className="customMiddleLink"><Link to='/add-transaction'>Add transaction</Link></li>
            <li><Link to='/transaction-list'>transaction History</Link></li>
          </ul>
        </div>
        </div>
        <Route path="/chart" render={() => <Chart data={this.state.data} />} />
        <Route path="/add-transaction" render={()=><Add onAdd={this.addTransaction} />}/>
        <Route path="/transaction-list" render={()=><TransactionList transactions={this.state.data} />}/>
        

      
      </div>
    </Router>
  
    </div>
    </div>

  );
  }
}




export default hot(module)(App);