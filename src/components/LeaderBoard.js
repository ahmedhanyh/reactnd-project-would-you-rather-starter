import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";

class LeaderBoard extends Component {
    render() {
        const { usersIds } = this.props;

        return (
            <div>
                {
                    usersIds.map(id => (
                        <User key={id} id={id} />
                    ))
                }
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        usersIds: Object.keys(users)
          .sort((a, b) => {
              let totalA = Object.keys(users[a].answers).length + users[a].questions.length;
              let totalB = Object.keys(users[b].answers).length + users[b].questions.length;

              return totalB - totalA;
          })
    }
}

export default connect(mapStateToProps)(LeaderBoard);