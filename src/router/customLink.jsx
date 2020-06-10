import React from 'react'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

export default function CustomLinkExample() {
    return (
        <div>
            <OldSchoolMenuLink 
                activeOnlyWhenExact={true}
                to='/'
                label='home'
            />
            <OldSchoolMenuLink to='/about' label='About' />
            <hr />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
            </Switch>
        </div> 
    )
}

function OldSchoolMenuLink({label,to,activeOnlyWhenExact}){
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <div>
            {match && '>'}
            <Link to={to}>{label}</Link>
        </div>
    )
}

function Home() {
    return (
        <div>Home</div>
    )
}

function About() {
    return (
        <div>About</div>
    )
}