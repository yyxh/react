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

export default function RedirectUse (){
    let { url,path } = useRouteMatch();
    return (
        <div>
            <ul>
                <li>
                    <Link to={`${url}/publicpage`}>publicpage</Link>
                </li>
                <li>
                    <Link to={`${url}/potectedpage`}>potectedpage</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${path}/publicpage`}>
                    <PublicPage />
                </Route>
                <Route path={`${path}/login`}>
                    <LoginPage />
                </Route>
                <PrivateRoute path={`${path}/potectedpage`}>
                    <PotectedPage />
                </PrivateRoute>
            </Switch>
        </div>
    )
}

const fakeAuth = {
    isAuthenticated:false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb,100);
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb,100);
    }
}

function PrivateRoute({children, ...rest}){
    let { url } = useRouteMatch();
    return (
        <Route 
            {...rest}
            render = {({location})=>
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                    <Redirect 
                        to = {{
                            pathname:`${url}/login`,
                            state: { from:location }
                        }}
                    />
                )
            } 
        />
    )
}

function PublicPage(){
    return (
        <div>PublicPage</div>
    )
}

function PotectedPage() {
    return (
        <div>PotectedPage</div>
    )
}

function LoginPage() {
    let history = useHistory();
    let location = useLocation();
    let {from} = location.state || { from: { pathname: '/'} };
    let login = () =>{
        fakeAuth.authenticate(() => {
            history.replace(from);
        })
    };
    return (
        <div>
            <p> you must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </div>
    )
}