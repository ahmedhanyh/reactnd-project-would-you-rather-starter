import React, { Component } from "react";
import { connect } from "react-redux";

class User extends Component {
    render() {
        const { user } = this.props;

        return (
            <div className="card">
                <img src={user.avatarURL} className="avatar" />
                <div className="card-container">
                    <div className="author-name">{user.name}</div>
                    <div>{`Questions answered: ${Object.keys(user.answers).length}`}</div>
                    <div>{`Questions asked: ${user.questions.length}`}</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }, { id }) {
    const user = users[id];
    
    return {
        user,
    }
}

export default connect(mapStateToProps)(User);