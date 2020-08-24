import React  from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Auth';
import Shop from './components/shop/shop';

const App = () => {

    return (
      <div className="App">
        <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/shop" exact component={Shop}/>
        </Switch>
      </div>
    );
  }

export default App;
