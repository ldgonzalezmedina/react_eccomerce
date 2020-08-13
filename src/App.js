import React from 'react';

import './App.css';

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./Components/header/header.component";
import SignInSignUp from "./pages/SignInSignUp/SignInSignUp.component.jsx"
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      CurrentUser: null
    }
  }
  unsubscribe = null;

  componentDidMount(){
    this.unsubscribe=auth.onAuthStateChanged(user => {
      this.setState({CurrentUser:user}, ()=>console.log(this.state.CurrentUser));
    })
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.CurrentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={Shop}/>
          <Route path='/signIn' component={SignInSignUp}/>
        </Switch>
      </div>
    );
  }
}
export default App;
