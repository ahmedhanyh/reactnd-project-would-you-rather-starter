import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { clearAuthedUser } from "../actions/authedUser";

class Nav extends Component {

    handleLogout = e => {
        this.props.dispatch(clearAuthedUser());
    }

    render() {
        const { user, authedUser } = this.props;

        return (
            <div className="navbar">
                <div className="nav-links">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/add" className="nav-link">New Question</NavLink>
                    <NavLink to="/leaderboard" className="nav-link">LeaderBoard</NavLink>
                </div>
                <div className="authed-user-info">
                    <div>{authedUser ? user.name : ''}</div>
                    <img src={authedUser ? user.avatarURL : '../images/No_Image.png'} className="nav-avatar" />
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        user: users[authedUser],
        authedUser,
    }
}

export default connect(mapStateToProps)(Nav);