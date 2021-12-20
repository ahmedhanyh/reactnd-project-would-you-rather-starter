import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";
import LoginPage from "./LoginPage";

class LeaderBoard extends Component {
    render() {
        const { usersIds, authedUser } = this.props;

        return (
            <div>
            {
                authedUser === null
                ? <LoginPage />
                : (
                    <div>
                        <h3 className="center">LeaderBoard</h3>
                        {
                            usersIds.map(id => (
                                <User key={id} id={id} />
                            ))
                        }
                    </div>
                )
            }
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        usersIds: Object.keys(users)
          .sort((a, b) => {
              let totalA = Object.keys(users[a].answers).length + users[a].questions.length;
              let totalB = Object.keys(users[b].answers).length + users[b].questions.length;

              return totalB - totalA;
          }),
        authedUser,
    }
}

export default connect(mapStateToProps)(LeaderBoard);