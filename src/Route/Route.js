import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import Landing from "../Component/Land/Landing";
import Navbar from "../Component/Nav/Navbar";
import JavaScript from "../Pages/JavaScript";
import NodeJs from "../Pages/NodeJs";
import ReactJs from "../Pages/ReactJs";
import DataBase from "../Pages/DataBase";
import Deployement from "../Pages/Deployement";
import Project from "../Pages/Project";
import Angular from "../Pages/Angular";

export default function Rout() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Route>
            <Route exact path='/' component={Landing} />
            <Route path='/javascript' component={JavaScript} />
            <Route path='/nodejs' component={NodeJs} />
            <Route path='/reactjs' component={ReactJs} />
            <Route path='/angular' component={Angular} />
            <Route path='/database' component={DataBase} />
            <Route path='/deployement' component={Deployement} />
            <Route path='/project' component={Project} />
          </Route>
        </div>
      </Router>
    </div>
  );
}
