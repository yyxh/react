import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom'
import RedirectUse from './router/redirect'


function RouterDemo() {
  return (
    <Router>
      <div>
        <ul>
          {/* 基本用法 */}
          {/* <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li> */}
          {/* 带参 */}
          {/* <li>
            <Link to='/netflix'>Netflix</Link>
          </li>
          <li>
            <Link to='/zillow-group'>Zillow Group</Link>
          </li> */}
          {/* 嵌套 */}
          {/* <li>
            <Link to='/topics'>topics</Link>
          </li> */}
          {/* 重定向 */}
          <li>
            <Link to='/redirect'>redirect</Link>
          </li>
        </ul>
      </div>
      <hr/>
      <Switch>
        {/* <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route> */}
        {/* 带参数 */}
        {/* <Route path='/:id' children={<Child />}></Route> */}
        <Route path='/topics'>
          <Topics />
        </Route>
        <Route path='/redirect'>
          <RedirectUse />
        </Route>
      </Switch>
    </Router>
  );
}

//嵌套
function Topics(){

  let { path,url } = useRouteMatch();
  console.log('path',path);
  console.log('path',url);
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>rendering</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>components</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  )
}


function Topic () {
  let {topicId} = useParams();
  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  )
}


//带参路由
function Child() {
  let {id} = useParams();
  return (
    <div>
      <h3>ID:{id}</h3>
    </div>
  )
}

function Home (){
  return (
    <div>
      home
    </div>
  )
}

function About (){
  return (
    <div>
      about
    </div>
  )
}

export default RouterDemo;
