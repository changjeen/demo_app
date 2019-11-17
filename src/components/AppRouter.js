import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import systems from "./contents/Systems";
import tasks from "./contents/Tasks";

const AppRouter = () => {
    return (
            <Router>
                <Switch>
                    <Route path="/" exact render={()=><div>home!</div>}/>
                    <Route path="/systems" exact component={systems}/>
                    <Route path="/tasks" exact component={tasks}/>
                </Switch>
            </Router>
    )
};

export default AppRouter;