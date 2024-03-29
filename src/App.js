import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import systems from "./components/contents/Systems";
import tasks from "./components/contents/Tasks";
import CreateSystems from "./components/contents/SystemsCreate";

class App extends Component {
  render() {
    return (
        <div>
          <Router>
            <ResponsiveDrawer>
              <Route path="/" exact render={()=><div>home!</div>}/>
              <Route path="/systems" exact component={systems}/>
              <Route path="/tasks" exact component={tasks}/>
              <Route path='/systems/create' component={CreateSystems} />
            </ResponsiveDrawer>
          </Router>

        </div>
    )
  }
}
export default App
