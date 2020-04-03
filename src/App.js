import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from 'containers/Home';
import Rino from 'containers/Rino';
import LoHi from 'containers/LoHi';

class App extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/lohi" component={LoHi} />
        <Route exact path="/rino" component={Rino} />
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
