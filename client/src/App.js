import React from 'react';
import{ BrowserRouter as Router, Route, Switch} from react-router-dom;


const App=()=>(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Regiser} />
        <Route component={noMatch} />
      </Switch>
      </div>

  </Router>
)



export default App;
