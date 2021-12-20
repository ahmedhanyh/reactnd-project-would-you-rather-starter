import React, { Component } from "react";
import { connect } from "react-redux";
import LoginPage from "./LoginPage";
import Poll from "./Poll";

class Homepage extends Component {
    state = {
        showAnswered: false,
    }

    togglePolls = () => {
        this.setState(currentState => ({ showAnswered: !currentState.showAnswered }));
    }
    
    render() {
        const { users, questionsIds, authedUser } = this.props;
        const { showAnswered } = this.state;

        return (
            <div>
                { authedUser === null
                ? <LoginPage />
                : (
                    <div className="polls-column">
                        <h3 onClick={this.togglePolls} className="homepage-toggle">Show {showAnswered ? 'Unanswered' : 'Answered'} Polls</h3>
                            {
                                showAnswered
                                ? (
                                    questionsIds
                                        .filter(id => (id in users[authedUser].answers))
                                        .map(id => (
                                                <Poll key={id} id={id} />
                                        ))   
                                )
                                : (
                                        
                                    questionsIds
                                        .filter(id => !(id in users[authedUser].answers))
                                        .map(id => (
                                            <Poll key={id} id={id} />
                                        ))
                                )
                            }
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