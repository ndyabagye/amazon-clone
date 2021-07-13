import './App.css';
import { useEffect } from 'react';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {auth} from './firebase'
import {useStateValue} from './StateProvider'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51JCVLuIYTMKq5viB3VDCAugOmMGElMiFZBhAmXGnt6B4YWgy3ijxGDoEVHoEfy94mcghTdxdIu15TrAKHBkzN1iW00BGsJcpc0');
function App() {
  const [{} , dispatch] = useStateValue();

  useEffect(()=>{
    //runs once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log("User is ", authUser);

      if(authUser){
        //user just logged in or user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })

      }
    })
  },[])
  return (
    <Router>

      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


