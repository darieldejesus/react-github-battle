import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Battle from './Battle';
import Home from './Home';
import Nav from './Nav';
import Popular from './Popular';
import Results from './Results';

/**
 * Main Component which contains the routers
 * for each section of the web app.
 */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route path='/popular' component={Popular} />
            <Route render={() => <p>404 - Not Found</p>} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
