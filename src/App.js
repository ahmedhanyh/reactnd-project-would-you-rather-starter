import React, { Component } from "react";
import Poll from "./components/Poll";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import Homepage from "./components/Homepage";
import LeaderBoard from "./components/LeaderBoard";
import LoginPage from "./components/LoginPage";
import Nav from "./components/Nav";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Homepage />
    );
  }
}

export default connect()(App);
