
import './App.css';
import RoutingFn from './routing'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from './about'
import Profile from './profile';
import ChildProfile from './childprofile'


function App() {
  return (

    <Router>
    <div className="App">

      <h1> my router functionality</h1>

      <ul>
        <li>
          <a href="/profile">profile</a>
        </li>
        <li>
          <a href="/about">about</a>
        </li>
      </ul>
      <Switch>
        <Route path="/about" component={About}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route  path="/profile/:name" component={ChildProfile}></Route>
      </Switch>
      <h1>footer</h1>
      {/* <header className="App-header"> */}
     <RoutingFn></RoutingFn>
      {/* </header> */}
    </div>
    </Router>
  );
}

export default App;
