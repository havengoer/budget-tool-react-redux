import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Menu = () => (
 
   <nav className="menu">
    <Link to="/add">
      <p>add transaction</p>
    </Link>
    <Link to="/transactionlist">
      <p>view transactionlist</p>
    </Link>
   
  </nav>
)
 

export default Menu;