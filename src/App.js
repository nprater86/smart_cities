import React, { useState } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Navbar from './components/Navbar';
import DashBoard from './components/Dashboard';
import UserContext from './context/UserContext';
import ProjectForm from './components/ProjectForm';
import ProjectShow from './components/ProjectShow';
import ProjectEditForm from './components/ProjectEditForm';
import LeaderBoard from './components/LeaderBoard';
import './App.css';

function App() {
  
  //initialize user as null in state
  const [user, setUser] = useState({
    id: 1,
    userName: "nprater86",
    isAdmin: true,
    city: {
      id: 1,
      name: "New York",
      state: "NY",
      country: "USA"
    }
  });

  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={{user, setUser, loggedIn, setLoggedIn}}>
          {/* if user is not logged in and stored in user, then navbar will not show */}
          {
            user != null ?
            <Navbar /> :
            ''
          }
          <div className="container">
            <Switch>
              <Route exact path="/">
                {
                  loggedIn ?
                  <Redirect to="/dashboard" /> :
                  <Redirect to="/login" />
                }
              </Route>
              <Route path="/registration">
                <Registration />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/dashboard">
                <DashBoard />
              </Route>
              <Route path="/datamanager">
                <ProjectForm />
              </Route>
              <Route path="/leaderboard">
                <LeaderBoard />
              </Route>
              <Route exact path="/projects/:id">
                <ProjectShow />
              </Route>
              <Route exact path="/projects/:id/edit">
                <ProjectEditForm />
              </Route>
            </Switch>
          </div>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;