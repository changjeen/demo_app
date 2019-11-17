import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import systems from "./contents/Systems";
import tasks from "./contents/Tasks";
import CreateSystems from "./contents/SystemsCreate";

const AppRouter = () => {
    return (
            <Router>
                <Switch>
                    <Route path="/" exact render={()=><div>home!</div>}/>
                    <Route path="/systems" component={systems}/>
                    <Route path="/tasks" component={tasks}/>
                    <Route path='/systems/create' component={CreateSystems} />
                    {/*<Route path='/systems/show/:id' component={Show} />*/}
                    {/*<Route path='/systems/edit/:id' component={Edit} />*/}
                </Switch>
            </Router>
    )
};

export default AppRouter;
