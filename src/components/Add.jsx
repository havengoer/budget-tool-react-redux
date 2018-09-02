import React, { Component } from "react";

export default class Add extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Amount
        <form>
        <input type="text" id="amount"/>
        Item
        <input type="text" id="item"/>
        Category
        <input type="text" id="category"/>
        <button onClick= {this.props.onAdd }>Add</button>
        </form>
      </div>
    );
  }
}
