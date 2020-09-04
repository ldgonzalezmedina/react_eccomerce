import React from 'react';

import './App.css';

import { Switch, Route, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./Components/header/header.component";
import SignInSignUp from "./pages/SignInSignUp/SignInSignUp.component.jsx"
import { auth, createUserProfileDocument} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions"

class App extends React.Component {
  unsubscribe = null;

  componentDidMount(){
    const {setCurrentUser}= this.props;

    this.unsubscribe=auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={Shop}/>
          <Route exact path='/signIn' render={()=> this.props.currentUser ? (<Redirect to ='/'/>) : (<SignInSignUp/>)}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) =>({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
