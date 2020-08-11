import React from 'react';

import './App.css';

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./Components/header/header.component";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
