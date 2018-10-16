import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './App.css';
import Navigation from './components/navigation';
import {Home, About, Topics, NoMatch, AuthExample} from './view';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <React.Fragment>
              <Navigation/>

              <Switch>

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Redirect from="/contact" to="/about" />
                <Route path="/auth" component={AuthExample}/>
                <Route path="/topics" component={Topics} />
                <Route component={NoMatch} />

              </Switch>

            </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
