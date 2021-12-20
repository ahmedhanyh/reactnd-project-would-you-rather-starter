import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class LoginPage extends Component {
    state = {
        chosenUser: 'sarahedo',
    }

    handleChange = e => {
        const chosenUser = e.target.value;
        
        this.setState({ chosenUser });
        console.log(this.state.chosenUser);
    }

    handleSubmit = e => {
        e.preventDefault();
        
        this.props.dispatch(setAuthedUser(this.state.chosenUser));
    }

    render() {
        const { users } = this.props;

        return (
            <form onSubmit={this.handleSubmit} className="login-form">
                <label htmlFor="users">Choose yourself from this list of users to login</label>
                <select id="users" name="users" value={this.state.chosenUser} onChange={this.handleChange}>
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