import React, { Component } from "react";
import { connect } from "react-redux";

class LoginPage extends Component {
    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
        const { users } = this.props;

        return (
            <form onSubmit={this.handleSubmit} className="login-form">
                <select name="users">
                    {
                        users.map(user => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))
                    }
                </select>
                <button>Login</button>
            </form>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.keys(users)
          .map(uid => users[uid]),
    }
}

export default connect(mapStateToProps)(LoginPage);