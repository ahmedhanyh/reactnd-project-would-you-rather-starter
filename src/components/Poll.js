import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Poll extends Component {
    render() {
        const { user, id } = this.props;

        return (
            <div className="card">
                <img src={user.avatarURL} className="avatar" />
                <div className="card-container">
                    <div className="author-name">{`${user.name} asks...`}</div>
                    <Link to={{
                        pathname: `/questions/${id}`,
                        state: id,
                    }}
                        className="view-btn">
                            View Poll
                    </Link>
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