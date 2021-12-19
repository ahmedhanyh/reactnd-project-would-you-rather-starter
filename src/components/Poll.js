import React, { Component } from "react";
import { connect } from "react-redux";

class Poll extends Component {
    render() {
        const { user } = this.props;

        console.log(this.props.id);

        return (
            <div className="card">
                <img src={user.avatarURL} className="avatar" />
                <div className="card-container">
                    <div className="author-name">{user.name}</div>
                    <button className="view-btn">View Poll</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, questions }, { id }) {
    const user = users[questions[id].author];
    
    return {
        user,
    }
}

export default connect(mapStateToProps)(Poll);