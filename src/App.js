import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Pages/Home";
import Contacts from "./components/Pages/Contacts";
import Products from "./components/Pages/Products";
import Services from "./components/Pages/Services";
import SBM from "./components/Pages/Products/SBM";
import ERP from "./components/Pages/Products/ERP";
import MAD from "./components/Pages/Products/MAD";
import AZS from "./components/Pages/Products/AZS";

const App = props => {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/contacts' component={Contacts}/>
          <Route path='/products/sbm' component={SBM}/>
          <Route path='/products/erp' component={ERP}/>
          <Route path='/products/mad' component={MAD}/>
          <Route path='/products/azs' component={AZS}/>
          <Route path='/products' component={Products}/>
          <Route path='/services' component={Services}/>
          <Route path='/' component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
