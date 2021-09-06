import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Pages/Home";
import Contacts from "./components/Pages/Contacts";
import Products from "./components/Pages/Products";
import Services from "./components/Pages/Services";

const App = props => {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/contacts' component={Contacts}/>
          <Route path='/products' component={Products}/>
          <Route path='/services' component={Services}/>
          <Route path='/' component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
