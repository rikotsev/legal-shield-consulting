import React from 'react';
import './App.css';

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import Services from "./business/Services";
import MockData from "./mock/MockData";
import {Amplify} from "aws-amplify";
import awsmobile from "./aws-exports";

import {Auth} from 'aws-amplify';
import CustomLogin from "./auth/Login";

Amplify.configure(awsmobile);

let mockData = new MockData();

class App extends React.Component<any, any>  {
    state = {
        services: [],
        user: {
            username: "",
            Session: ""
        }
    }
    getCurrentUser = async ():Promise<any> => {

        return {};
    }
    setUser = (user: any): void => {
        this.setState( () => ({
            user: user
        }));

        console.log(this.state);
    }

    render() {
        return (
              <div className="App">
                  <Router>
                      <div className="tempContainer">
                          <ul className="linkMenu">
                              <li>
                                  <Link to={"/"}>
                                      Home
                                  </Link>
                              </li>
                              <li>
                                  <Link to={"/services"}>
                                      Services
                                  </Link>
                              </li>
                              <li>
                                  <Link to={"/login"}>
                                      Login
                                  </Link>
                              </li>
                              <li>
                                  <Link to={"/orders"}>
                                      Orders
                                  </Link>
                              </li>
                              <li>
                                  Welcome {this.state.user.username}
                              </li>
                          </ul>
                      </div>
                      <hr/>
                      <div className="tempContainer">
                          <Switch>
                              <Route exact path={"/"}>
                                  <h1>Home</h1>
                              </Route>
                              <Route path={"/services"}>
                                  <Services user={this.state.user}/>
                              </Route>
                              <Route path={"/login"}>
                                  <CustomLogin isLoggedIn={this.state.user.username != ""} setUser={this.setUser}/>
                              </Route>
                              <Route path={"/orders"}>
                                  <h1>Orders</h1>
                              </Route>
                          </Switch>
                      </div>
                  </Router>
              </div>
          );
    }
}

export default App;
