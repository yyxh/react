import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
    useRouteMatch
  } from "react-router-dom";

  export default function NotMatchPage() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                       <Link to="/">Home</Link>
                    </li>
                    <li>
                       <Link to="/also/will/not/match">Also Will Not Match</Link>
                    </li>
                </ul>
            </div>
            <Switch>
            <Route path="*">
                <NoMatch />
            </Route>
            </Switch>
        </Router>
    )
  }

  function NoMatch() {
      let location = useLocation();
      return (
          <div>
              <h3>
                No match for <code>{location.pathname}</code>
              </h3>
          </div>
      )
  }