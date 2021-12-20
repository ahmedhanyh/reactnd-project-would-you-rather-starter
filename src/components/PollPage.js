import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAnswer } from "../actions/questions";

class PollPage extends Component {
    state = {
        answer: '',
        answered: false,
    }

    componentDidMount() {
        this.checkIfAnswered();
    }

    handleChange = e => {
        this.setState({ answer: e.target.value })
    }
    
    handleSubmit = e => {
        e.preventDefault();

        const info = {
            qid: this.props.location.state,
            authedUser: this.props.authedUser,
            answer: this.state.answer,
        };

        this.props.dispatch(handleAnswer(info));
        this.setState({ answered: true });
    }
    
    checkIfAnswered = () => {
        const id = this.props.location.state;
        const { users, authedUser } = this.props;

        let answeredFlag = null;
        
        Object.keys(users[authedUser].answers).forEach(qid => {
            if (qid === id) {
                answeredFlag = true;
            }
        })

        if (answeredFlag) {
            this.setState({ answered: true });
        }
    }

    render() {
        const { answered } = this.state;
        const id = this.props.location.state;
        const { users, questions, authedUser } = this.props;
        const question = questions[id];
        const user = users[question.author];
        const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;


        return (
            <div>
                <div className="poll-page">
                    <img src={user.avatarURL} className="avatar" />
                    {
                        answered
                        ? (
                            <div className="poll-details">
                                <div className="first-option">
                                    <h3>Option 1</h3>
                                    <div>{`Text: ${question.optionOne.text}`}</div>
                                    <div>{`Number of votes: ${question.optionOne.votes.length}`}</div>
                                    <div>{`Percentage of total votes: ${Math.round((question.optionOne.votes.length / totalVotes) * 100)}`}</div>
                                </div>
                                <div className="second-option">
                                    <h3>Option 2</h3>
                                    <div>{`Text: ${question.optionTwo.text}`}</div>
                                    <div>{`Number of votes: ${question.optionTwo.votes.length}`}</div>
                                    <div>{`Percentage of total votes: ${Math.round((question.optionTwo.votes.length / totalVotes) * 100)}`}</div>
                                </div>
                            </div>
                        )
                        : (
                            <div className="poll-options">
                                <div className="poll-text">Would You Rather...</div>
                                <form className="poll-form" onSubmit={this.handleSubmit}>
                                    <div>
                                        <input type='radio' id="optionOne" value="optionOne" name="options" onChange={this.handleChange} />
                                        <label htmlFor='optionOne'>{question.optionOne.text}</label>
                                    </div>
                                    <div>
                                        <input type='radio' id="optionTwo" value="optionTwo" name="options" onChange={this.handleChange} />
                                        <label htmlFor='optionTwo'>{question.optionTwo.text}</label>
                                    </div>
                                    <button disabled={this.state.answer === ''} className="submit-btn">Submit answer</button>
                                </form>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    return {
        users,
        questions,
        authedUser,
    }
}

export default connect(mapStateToProps)(PollPage);