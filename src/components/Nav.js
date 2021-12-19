import React, { Component } from "react";
import { connect } from "react-redux";

class Nav extends Component {
    render() {
        const { user } = this.props;

        return (
            <div className="navbar">
                <div className="nav-links">
                    <div className="nav-link">Home</div>
                    <div className="nav-link">New Question</div>
                    <div className="nav-link">LeaderBoard</div>
                </div>
                <div className="authed-user-info">
                    <div>name</div>
                    <img src="../images/male-profile-pic.jpg" className="nav-avatar" />
                    <button>Logout</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        user: users[authedUser],
    }
}

export default connect(mapStateToProps)(Nav);