import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import Poll from "./components/Poll";
import Homepage from "./components/Homepage";
import LeaderBoard from "./components/LeaderBoard";
import LoginPage from "./components/LoginPage";
import Nav from "./components/Nav";
import NewQuestion from "./components/NewQuestion";
import PollPage from "./components/PollPage";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="app-body">
          <Nav />
          <Route path="/" exact component={Homepage} />
          <Route path="/add" component={NewQuestion} />
          <Route path="/leaderboard" component={LeaderBoard} />
          <Route path="/questions" component={PollPage} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
