import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from 'containers/Home';
import Rino from 'containers/Rino';
import LoHi from 'containers/LoHi';
import withTheme from 'components/withTheme';
import Drawer from 'components/Drawer'

const App = ({ Theme }) => {
  return (
    <>
      <Switch>
        <Route exact path="/lohi" component={LoHi} />
        <Route exact path="/rino" component={Rino} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Drawer theme={Theme} />
    </>
  );
}

export default withTheme(App);
