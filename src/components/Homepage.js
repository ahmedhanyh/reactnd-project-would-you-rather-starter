import React, { Component } from "react";
import { connect } from "react-redux";
import Poll from "./Poll";

class Homepage extends Component {
    render() {
        const { users, questionsIds, authedUser } = this.props;

        return (
            <div>
                { authedUser === null
                ? null
                : (
                    <div className="polls-columns">
                        <div className="unanswered-polls">
                        <h3 className="center">Unanswered Polls</h3>
                            {
                                questionsIds
                                .filter(id => !(id in users[authedUser].answers))
                                .map(id => (
                                        <Poll key={id} id={id} />
                                    ))
                            }
                        </div>
                        <div className="answered-polls">
                        <h3 className="center">Answered Polls</h3>
                            {
                                questionsIds
                                .filter(id => id in users[authedUser].answers)
                                .map(id => (
                                        <Poll key={id} id={id} />
                                    ))
                            }
                        </div>
                    </div>
                )
                }
            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    return {
        users,
        questionsIds: Object.keys(questions)
          .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        authedUser,
    }
}

export default connect(mapStateToProps)(Homepage);